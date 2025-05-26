export function initAudiobook(strTitle, baseUrl) {
    let voices = [];
    const predefVoice = 'Google español (España)';
    let text = '';
    let phrases = [];
    let currentIndex = 0;
    let utterance;
    let isPaused = false;
    let isRepeating = false;
    const lang = 'es';
    const langCountry = 'es-ES';
    const pitch = 1.5;
    const secPause = 1000;
    const secLongPause = 3000;

    window.speechSynthesis.onvoiceschanged = () => {
        voices = speechSynthesis.getVoices().filter(v => v.lang.startsWith(lang));
    };

    async function loadSelector() {
        document.title = strTitle;
        document.querySelector("h1").textContent = strTitle;

        const res = await fetch(baseUrl + 'lessons.md?t=' + Date.now());
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
        const res = await fetch(baseUrl + 'lessons/' + file + '?t=' + Date.now());
        text = await res.text();
        document.getElementById('text').textContent = text;
        phrases = splitTextToPhrases(text);
        highlightCurrentPhrase();
    }

    function splitTextToPhrases(txt) {
        const lines = txt.split('\n');
        const result = [];
        for (let line of lines) {
        if (line.trim() === '') {
            result.push('\n');
            continue;
        }
        let parts = [];
        const regex = /\[pause\]|\[long pause\]|[^.!?\[\]]+[.!?]?/gi;
        let match;
        while ((match = regex.exec(line)) !== null) {
            let phrase = match[0].trim();
            if (phrase) parts.push(phrase);
        }
        if (parts.length === 0) parts.push(line);
        result.push(...parts, '\n');
        }
        return result.filter(p => p !== '');
    }

    function sanitizeForSpeech(phrase) {
        return phrase
        .replace(/\bGET\b/g, 'guet')
        .replace(/\bPOST\b/g, 'post')
        .replace(/\bPUT\b/g, 'put')
        .replace(/\bPATCH\b/g, 'patch')
        .replace(/\bDELETE\b/g, 'delete')
        .replace(/\bJSON\b/g, 'yeison')
        .replace(/\bjson\b/g, 'yeison')
        .replace(/\bURLs\b/g, 'URLes');
    }

    async function speakCurrentPhrase() {
        if (currentIndex >= phrases.length) {
        await loadNextFileAndRead();
        return;
        }
        if (isPaused || isRepeating) return;

        const phrase = phrases[currentIndex];
        if (phrase === '[pause]' || phrase === '[long pause]') {
        currentIndex++;
        setTimeout(speakCurrentPhrase, phrase === '[pause]' ? secPause : secLongPause);
        return;
        }

        utterance = new SpeechSynthesisUtterance(sanitizeForSpeech(phrase));
        utterance.lang = langCountry;
        utterance.pitch = pitch;
        utterance.rate = 1;
        utterance.voice = voices.find(v => v.name.includes(predefVoice)) || voices[0];

        highlightCurrentPhrase();

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
        const highlighted = phrases.map((p, i) => {
        if (p === '\n') return '<br>';
        if (p === '[pause]' || p === '[long pause]') return '';
        const safe = escapeHtml(p);
        return (i === currentIndex) ? `<mark>${safe}</mark>` : safe;
        });
        container.innerHTML = highlighted.join(' ');
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
        if (phraseToRepeat === '[pause]' || phraseToRepeat === '[long pause]') return;

        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        }

        isRepeating = true;

        const repeatUtterance = new SpeechSynthesisUtterance(phraseToRepeat);
        repeatUtterance.lang = langCountry;
        repeatUtterance.pitch = pitch;
        repeatUtterance.rate = 1;
        repeatUtterance.voice = voices.find(v => v.name.includes(predefVoice)) || voices[0];

        highlightCurrentPhrase();

        repeatUtterance.onend = () => {
            isRepeating = false;
            isPaused = true;
            highlightCurrentPhrase();
        };

        speechSynthesis.speak(repeatUtterance);
    };

    loadSelector();
}
