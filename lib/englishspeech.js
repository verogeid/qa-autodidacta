export function initAudiobook(strTitle, baseUrl) {
    let voices = [];
    // Define preferred voices for each type
    const voiceMap = {
        'es-male': 'Google español (España)', // Default Spanish male voice
        'en-male': 'Google US English', // Preferred English male voice for voice 3
        'en-female-1': 'Google UK English Female', // Preferred English female voice for voice 1
        'en-female-2': 'Google US English Female'  // Preferred English female voice for voice 2
        // Nota: Los nombres exactos de las voces pueden variar entre navegadores y sistemas operativos.
        // Revisa la consola (console.log de voices) para encontrar los nombres exactos en tu sistema.
    };

    let text = '';
    let phrases = [];
    let currentIndex = 0;
    let utterance;
    let isPaused = false;
    let isRepeating = false;
    const secPause = 1000;
    const secLongPause = 3000;
    const pitch = 1.5; // Default pitch

    // IMPORTANT: Ensure voices are loaded before proceeding.
    // This event fires when the list of voices changes, typically on page load.
    window.speechSynthesis.onvoiceschanged = () => {
        voices = speechSynthesis.getVoices();
        console.log('Available voices after onvoiceschanged:', voices.map(v => v.name));
        // You might want to trigger loadText or a similar function here
        // if initial load depends heavily on voices being available.
        // For now, loadSelector will handle it.
    };

    async function loadSelector() {
        document.title = strTitle;
        document.querySelector("h1").textContent = strTitle;

        const res = await fetch(baseUrl + 'speechs.md?t=' + Date.now());
        const lines = (await res.text()).split('\n').filter(Boolean);
        const selector = document.getElementById('selector');
        selector.innerHTML = '';
        lines.forEach(file => {
            const option = document.createElement('option');
            option.value = file;
            option.textContent = file.replace('.md', '');
            selector.appendChild(option);
        });
        selector.addEventListener('change', loadText);
        if (lines[0]) {
            selector.value = lines[0];
            await loadText(); // Load text after setting initial value
        }
    }

    async function loadText() {
        speechSynthesis.cancel();
        if (utterance) utterance.onend = null;
        isPaused = false;
        isRepeating = false;
        currentIndex = 0;
        const file = document.getElementById('selector').value;
        const res = await fetch(baseUrl + 'speechs/' + file + '?t=' + Date.now());
        text = await res.text();
        
        // --- CRUCIAL CHANGE HERE ---
        // DO NOT set textContent directly from raw markdown here.
        // The display will be handled by highlightCurrentPhrase after parsing.
        // document.getElementById('text').textContent = text; 

        phrases = splitTextToPhrases(text);
        highlightCurrentPhrase(); // This will render the parsed content
    }

    function splitTextToPhrases(txt) {
        const lines = txt.split('\n');
        const result = [];
        // Regex para capturar:
        // 1. {N(Alias): Contenido} -> Grupo 1: N, Grupo 2: (Alias), Grupo 3: Contenido
        // 2. [pause]
        // 3. [long pause]
        // 4. Cualquier otro texto que no sea parte de lo anterior, separado por puntos/interrogaciones/exclamaciones.
        const regex = /{(\d)(\([A-Z]\))?:\s*([^}]+)}|\[pause\]|\[long pause\]|([^.!?\n]+[.!?\n]?)/gi; // Regex ajustada

        for (let line of lines) {
            if (line.trim() === '') {
                result.push({ type: 'newline' });
                continue;
            }

            let match;
            let lastIndex = 0;
            while ((match = regex.exec(line)) !== null) {
                // Handle any leading text before a recognized pattern
                if (match.index > lastIndex) {
                    let precedingText = line.substring(lastIndex, match.index).trim();
                    if (precedingText) {
                        // Split preceding text into sentences
                        const sentenceRegex = /[^.!?]+[.!?]?/g;
                        let sentenceMatch;
                        while ((sentenceMatch = sentenceRegex.exec(precedingText)) !== null) {
                            if (sentenceMatch[0].trim()) {
                                result.push({ type: 'text', content: sentenceMatch[0].trim() });
                            }
                        }
                    }
                }

                if (match[0].startsWith('{')) { // It's a voiced phrase
                    const voiceNum = match[1];
                    const alias = match[2] ? match[2].slice(1, -1) : null; // Extract alias without parentheses
                    const content = match[3].trim();
                    result.push({ type: 'voiced', voice: voiceNum, alias: alias, content: content });
                } else if (match[0] === '[pause]') {
                    result.push({ type: 'pause' });
                } else if (match[0] === '[long pause]') {
                    result.push({ type: 'long-pause' });
                } else if (match[4]) { // It's regular text captured by the last group
                    let regularText = match[4].trim();
                    if (regularText) {
                        // Split regular text into sentences
                        const sentenceRegex = /[^.!?]+[.!?]?/g;
                        let sentenceMatch;
                        while ((sentenceMatch = sentenceRegex.exec(regularText)) !== null) {
                            if (sentenceMatch[0].trim()) {
                                result.push({ type: 'text', content: sentenceMatch[0].trim() });
                            }
                        }
                    }
                }
                lastIndex = regex.lastIndex;
            }

            // Handle any remaining text after the last match in the line
            if (lastIndex < line.length) {
                let remainingText = line.substring(lastIndex).trim();
                if (remainingText) {
                    const sentenceRegex = /[^.!?]+[.!?]?/g;
                    let sentenceMatch;
                    while ((sentenceMatch = sentenceRegex.exec(remainingText)) !== null) {
                        if (sentenceMatch[0].trim()) {
                            result.push({ type: 'text', content: sentenceMatch[0].trim() });
                        }
                    }
                }
            }
        }
        console.log("Parsed Phrases:", result); // Log parsed phrases for debugging
        // Filter out any empty content phrases that might have slipped through
        return result.filter(p => p.type === 'newline' || p.type === 'pause' || p.type === 'long-pause' || (p.content && p.content.length > 0));
    }


    function sanitizeForSpeech(phraseContent, currentVoiceLang) {
        let cleanedPhrase = phraseContent;

        // Apply phonetic replacements only for Spanish phrases
        if (currentVoiceLang && currentVoiceLang.startsWith('es')) { // Check if lang starts with 'es'
            cleanedPhrase = cleanedPhrase
                .replace(/\bGET\b/g, 'guet')
                .replace(/\bPOST\b/g, 'post')
                .replace(/\bPUT\b/g, 'put')
                .replace(/\bPATCH\b/g, 'patch')
                .replace(/\bDELETE\b/g, 'delete')
                .replace(/\bJSON\b/g, 'yeison')
                .replace(/\bjson\b/g, 'yeison')
                .replace(/\bURLs\b/g, 'URLes');
        }
        return cleanedPhrase;
    }

    function getVoiceAndLang(phraseObject) {
        let voiceName = '';
        let lang = '';
        let aliasDisplay = '';

        if (phraseObject.type === 'voiced') {
            const voiceNum = phraseObject.voice;
            const alias = phraseObject.alias;
            if (alias) {
                aliasDisplay = alias + ': ';
            }

            switch (voiceNum) {
                case '3': // Male English
                    voiceName = voiceMap['en-male'];
                    lang = 'en-US';
                    break;
                case '1': // Female English 1
                    voiceName = voiceMap['en-female-1'];
                    lang = 'en-US';
                    break;
                case '2': // Female English 2
                    voiceName = voiceMap['en-female-2'];
                    lang = 'en-US';
                    break;
                default:
                    // Fallback to default Spanish male if voice number is unrecognized
                    voiceName = voiceMap['es-male'];
                    lang = 'es-ES';
            }
        } else {
            // Default for 'text' type phrases (Spanish male)
            voiceName = voiceMap['es-male'];
            lang = 'es-ES';
        }

        // Find the best matching voice.
        // Prioritize by name, then by language, then any voice as last resort.
        const selectedVoice = voices.find(v => v.name.includes(voiceName) && v.lang.startsWith(lang)) ||
                                    voices.find(v => v.lang.startsWith(lang)) ||
                                    voices[0];

        // If no voice is found, log a warning and use a fallback or default
        if (!selectedVoice) {
            console.warn(`No suitable voice found for "${voiceName}" (${lang}). Using default system voice.`);
            // You might want to set a generic fallback here if voices[0] is not reliable
            return { voice: null, lang: lang, aliasDisplay: aliasDisplay }; // Return null voice to indicate failure
        }

        console.log(`Selected voice for '${phraseObject.content}': ${selectedVoice ? selectedVoice.name : 'NONE'} (Lang: ${lang})`);
        return { voice: selectedVoice, lang: lang, aliasDisplay: aliasDisplay };
    }


    async function speakCurrentPhrase() {
        if (currentIndex >= phrases.length) {
            await loadNextFileAndRead();
            return;
        }
        if (isPaused || isRepeating) return;

        const phraseObject = phrases[currentIndex];

        if (phraseObject.type === 'newline') {
            currentIndex++;
            speakCurrentPhrase();
            return;
        } else if (phraseObject.type === 'pause' || phraseObject.type === 'long-pause') {
            currentIndex++;
            setTimeout(speakCurrentPhrase, phraseObject.type === 'pause' ? secPause : secLongPause);
            return;
        }

        // Handle cases where content might be missing or empty for some reason
        if (!phraseObject.content || phraseObject.content.trim() === '') {
            currentIndex++;
            speakCurrentPhrase();
            return;
        }

        const { voice, lang, aliasDisplay } = getVoiceAndLang(phraseObject);

        // If no voice was found, log and skip this phrase to avoid errors
        if (!voice) {
            console.error(`Skipping phrase '${phraseObject.content}' due to no suitable voice found.`);
            currentIndex++;
            speakCurrentPhrase();
            return;
        }

        const textToSpeak = sanitizeForSpeech(phraseObject.content, lang);

        utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = lang;
        utterance.pitch = pitch;
        utterance.rate = 1;
        utterance.voice = voice;

        highlightCurrentPhrase(); // Re-render the display for the current phrase

        utterance.onend = () => {
            if (!isPaused && !isRepeating) {
                currentIndex++;
                speakCurrentPhrase();
            }
        };

        speechSynthesis.speak(utterance);
    }

    async function loadNextFileAndRead() {
        const selector = document.getElementById('selector');
        const options = Array.from(selector.options);
        const currentIndexOption = options.findIndex(opt => opt.value === selector.value);
        const nextIndex = currentIndexOption + 1;

        if (nextIndex < options.length) {
            selector.value = options[nextIndex].value;
            await loadText();
            speakCurrentPhrase();
        }
    }

    function highlightCurrentPhrase() {
        const container = document.getElementById('text');
        const displayedPhrases = phrases.map((p, i) => {
            if (p.type === 'newline') return '<br>';
            if (p.type === 'pause' || p.type === 'long-pause') return '';

            let contentToDisplay = p.content;
            if (p.type === 'voiced' && p.alias) {
                // Display "Alias: Content" for voiced phrases with an alias
                contentToDisplay = `${p.alias}: ${p.content}`; 
            }
            // For voiced phrases without alias, or 'text' type, just display content.

            const safe = escapeHtml(contentToDisplay);
            // Highlight the current phrase
            return (i === currentIndex) ? `<mark>${safe}</mark>` : safe;
        });
        container.innerHTML = displayedPhrases.join(' '); // Join with space for readability
    }

    function escapeHtml(str) {
        return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    document.getElementById('btnRead').onclick = () => {
        if (speechSynthesis.speaking && isPaused) {
            speechSynthesis.resume();
            isPaused = false;
        } else {
            if (speechSynthesis.speaking) speechSynthesis.cancel();
            isPaused = false;
            isRepeating = false;
            speakCurrentPhrase();
        }
    };

    document.getElementById('btnPause').onclick = () => {
        if (speechSynthesis.speaking && !isPaused) {
            speechSynthesis.pause();
            isPaused = true;
        }
    };

    document.getElementById('btnRepeat').onclick = () => {
        if (phrases.length === 0 || currentIndex >= phrases.length) return;

        const phraseToRepeat = phrases[currentIndex];
        if (phraseToRepeat.type === 'pause' || phraseToRepeat.type === 'long-pause' || phraseToRepeat.type === 'newline' || !phraseToRepeat.content || phraseToRepeat.content.trim() === '') return;

        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }

        isRepeating = true;

        const { voice, lang } = getVoiceAndLang(phraseToRepeat);

        if (!voice) { // Handle case where no voice is found for repeat
            console.error(`Skipping repeat for phrase '${phraseToRepeat.content}' due to no suitable voice found.`);
            isRepeating = false;
            isPaused = true;
            highlightCurrentPhrase();
            return;
        }

        const textToSpeak = sanitizeForSpeech(phraseToRepeat.content, lang);

        const repeatUtterance = new SpeechSynthesisUtterance(textToSpeak);
        repeatUtterance.lang = lang;
        repeatUtterance.pitch = pitch;
        repeatUtterance.rate = 1;
        repeatUtterance.voice = voice;

        highlightCurrentPhrase(); // Re-render current phrase for visual feedback

        repeatUtterance.onend = () => {
            isRepeating = false;
            isPaused = true; // Stay paused after repeating
            highlightCurrentPhrase();
        };

        speechSynthesis.speak(repeatUtterance);
    };

    // --- NUEVAS FUNCIONES PARA NAVEGACIÓN DE ORACIONES ---

    // Función para ir a la siguiente oración
    document.getElementById('btnNextSentence').onclick = () => {
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel(); // Detiene la reproducción actual
        }
        isPaused = false; // Asegura que no esté pausado al avanzar
        isRepeating = false; // Resetea el estado de repetición

        if (currentIndex < phrases.length - 1) {
            currentIndex++;
            // Saltar elementos no hablables (saltos de línea, pausas)
            while (currentIndex < phrases.length && 
                (phrases[currentIndex].type === 'newline' || 
                    phrases[currentIndex].type === 'pause' || 
                    phrases[currentIndex].type === 'long-pause' ||
                    !phrases[currentIndex].content || phrases[currentIndex].content.trim() === '')) {
                currentIndex++;
            }
            if (currentIndex < phrases.length) {
                speakCurrentPhrase();
            } else {
                // Si llegamos al final del archivo, intentamos cargar el siguiente
                loadNextFileAndRead();
            }
        } else {
            // Si ya estamos en la última frase del archivo actual, intenta cargar el siguiente archivo
            loadNextFileAndRead();
        }
        highlightCurrentPhrase(); // Actualiza el resaltado incluso si no hay reproducción
    };

    // Función para ir a la oración anterior
    document.getElementById('btnPreviousSentence').onclick = () => {
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel(); // Detiene la reproducción actual
        }
        isPaused = true; // Pausa automáticamente al retroceder
        isRepeating = false; // Resetea el estado de repetición

        if (currentIndex > 0) {
            currentIndex--;
            // Retroceder saltando elementos no hablables (saltos de línea, pausas)
            while (currentIndex >= 0 && 
                (phrases[currentIndex].type === 'newline' || 
                    phrases[currentIndex].type === 'pause' || 
                    phrases[currentIndex].type === 'long-pause' ||
                    !phrases[currentIndex].content || phrases[currentIndex].content.trim() === '')) {
                currentIndex--;
            }
            // Si nos pasamos del inicio, volvemos a la primera frase
            if (currentIndex < 0) {
                currentIndex = 0;
            }
        } else {
            // Si ya estamos en la primera frase, no hacemos nada o podríamos retroceder al archivo anterior
            // Por simplicidad, aquí no retrocedemos a un archivo anterior.
            currentIndex = 0; // Aseguramos que el índice no sea negativo
        }
        highlightCurrentPhrase(); // Actualiza el resaltado
    };
    // --- FIN DE NUEVAS FUNCIONES ---

    loadSelector();
}