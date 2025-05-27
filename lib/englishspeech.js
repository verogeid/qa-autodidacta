export function initAudiobook(strTitle, baseUrl) {
    let voices = [];
    // Define preferred voices for each type
    const voiceMap = {
        'es-male': 'Google español (España)', // Default Spanish male voice
        'en-male': 'Google US English', // Preferred English male voice for voice 3
        'en-female-1': 'Google UK English Female', // Preferred English female voice for voice 1
        'en-female-2': 'Google US English Female'  // Preferred English female voice for voice 2
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

    window.speechSynthesis.onvoiceschanged = () => {
        voices = speechSynthesis.getVoices();
        console.log('Available voices:', voices.map(v => v.name)); // Log available voices for debugging
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
            await loadText();
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
        document.getElementById('text').textContent = text; // This will show raw markdown initially
        phrases = splitTextToPhrases(text);
        highlightCurrentPhrase();
    }

    function splitTextToPhrases(txt) {
        const lines = txt.split('\n');
        const result = [];
        const regex = /{(\d)(\([A-Z]\))?:\s*([^}]+)}|\[pause\]|\[long pause\]|[^.!?\[\]{]+[.!?]?/gi; // Modified regex

        for (let line of lines) {
            if (line.trim() === '') {
                result.push({ type: 'newline' });
                continue;
            }

            let match;
            let lastIndex = 0;
            while ((match = regex.exec(line)) !== null) {
                // Handle text before a { } block or pause
                if (match.index > lastIndex) {
                    let part = line.substring(lastIndex, match.index).trim();
                    if (part) {
                        // Split into sentences for non-marked text
                        const sentenceRegex = /[^.!?]+[.!?]?/g;
                        let sentenceMatch;
                        while((sentenceMatch = sentenceRegex.exec(part)) !== null) {
                            if (sentenceMatch[0].trim()) {
                                result.push({ type: 'text', content: sentenceMatch[0].trim() });
                            }
                        }
                    }
                }

                if (match[0].startsWith('{')) {
                    const voiceNum = match[1];
                    const alias = match[2] ? match[2].slice(1, -1) : null; // Extract alias without parentheses
                    const content = match[3].trim();
                    result.push({ type: 'voiced', voice: voiceNum, alias: alias, content: content });
                } else if (match[0] === '[pause]') {
                    result.push({ type: 'pause' });
                } else if (match[0] === '[long pause]') {
                    result.push({ type: 'long-pause' });
                } else {
                    let part = match[0].trim();
                    if (part) {
                        result.push({ type: 'text', content: part });
                    }
                }
                lastIndex = regex.lastIndex;
            }
            // Handle any remaining text after the last match
            if (lastIndex < line.length) {
                let part = line.substring(lastIndex).trim();
                if (part) {
                    const sentenceRegex = /[^.!?]+[.!?]?/g;
                    let sentenceMatch;
                    while((sentenceMatch = sentenceRegex.exec(part)) !== null) {
                        if (sentenceMatch[0].trim()) {
                            result.push({ type: 'text', content: sentenceMatch[0].trim() });
                        }
                    }
                }
            }
        }
        console.log("Parsed Phrases:", result); // Log parsed phrases for debugging
        return result.filter(p => p.content || p.type === 'newline' || p.type === 'pause' || p.type === 'long-pause');
    }


    function sanitizeForSpeech(phraseContent, currentVoiceLang) {
        let cleanedPhrase = phraseContent;

        // Apply phonetic replacements only for Spanish phrases
        if (currentVoiceLang === 'es-ES') {
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
                case '3':
                    voiceName = voiceMap['en-male'];
                    lang = 'en-US';
                    break;
                case '1':
                    voiceName = voiceMap['en-female-1'];
                    lang = 'en-US'; // Use US English for consistency unless specified UK
                    break;
                case '2':
                    voiceName = voiceMap['en-female-2'];
                    lang = 'en-US';
                    break;
                default:
                    // Fallback to default Spanish male if voice number is unrecognized
                    voiceName = voiceMap['es-male'];
                    lang = 'es-ES';
            }
        } else {
            // Default for 'text' type phrases
            voiceName = voiceMap['es-male'];
            lang = 'es-ES';
        }

        const selectedVoice = voices.find(v => v.name.includes(voiceName) && v.lang.startsWith(lang)) ||
            voices.find(v => v.lang.startsWith(lang)) ||
            voices[0]; // Fallback to any voice if specific not found

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

        const { voice, lang, aliasDisplay } = getVoiceAndLang(phraseObject);
        const textToSpeak = sanitizeForSpeech(phraseObject.content, lang);

        utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.lang = lang;
        utterance.pitch = pitch;
        utterance.rate = 1;
        utterance.voice = voice;

        highlightCurrentPhrase(aliasDisplay); // Pass alias display to highlight function

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

    function highlightCurrentPhrase(currentAliasDisplay = '') {
        const container = document.getElementById('text');
        const displayedPhrases = phrases.map((p, i) => {
            if (p.type === 'newline') return '<br>';
            if (p.type === 'pause' || p.type === 'long-pause') return '';

            let contentToDisplay = p.content;
            if (p.type === 'voiced' && p.alias) {
                contentToDisplay = `${p.alias}: ${p.content}`; // Show alias in display
            }

            const safe = escapeHtml(contentToDisplay);
            return (i === currentIndex) ? `<mark>${safe}</mark>` : safe;
        });
        container.innerHTML = displayedPhrases.join(' ');
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
        if (phraseToRepeat.type === 'pause' || phraseToRepeat.type === 'long-pause' || phraseToRepeat.type === 'newline') return;

        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }

        isRepeating = true;

        const { voice, lang } = getVoiceAndLang(phraseToRepeat);
        const textToSpeak = sanitizeForSpeech(phraseToRepeat.content, lang);

        const repeatUtterance = new SpeechSynthesisUtterance(textToSpeak);
        repeatUtterance.lang = lang;
        repeatUtterance.pitch = pitch;
        repeatUtterance.rate = 1;
        repeatUtterance.voice = voice;

        highlightCurrentPhrase(); // No alias display for repeat

        repeatUtterance.onend = () => {
            isRepeating = false;
            isPaused = true; // Stay paused after repeating
            highlightCurrentPhrase();
        };

        speechSynthesis.speak(repeatUtterance);
    };

    loadSelector();
}