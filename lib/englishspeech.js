// englishspeech.js

const voices = {};
let utterances = [];
let currentIndex = 0;
let isReading = false;
let isRepeating = false;
let baseUrl = '';
let textContainer;
let selector;
let speechsList = [];

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function sanitizeTitle(title) {
    return title.replace(/-/g, ' ').replace(/\.md$/, '').trim();
}

function speak(utt, div) {
    return new Promise(resolve => {
        if (!utt.text.trim()) return resolve();
        if (div) {
        document.querySelectorAll('.highlight').forEach(el => el.classList.remove('highlight'));
        div.classList.add('highlight');
        }
        utt.onend = resolve;
        speechSynthesis.speak(utt);
    });
}

function parseMarkdown(text) {
    const lines = text.split(/\n+/);
    utterances = [];
    textContainer.innerHTML = '';

    for (let line of lines) {
        let cleanLine = line.trim();
        if (!cleanLine) continue;

        let pauses = [];
        let pauseMatch;
        while ((pauseMatch = cleanLine.match(/\[(long )?pause\]/i))) {
        pauses.push(pauseMatch[1] ? 4000 : 2000);
        cleanLine = cleanLine.replace(pauseMatch[0], '').trim();
        }

        const fragment = document.createElement('div');
        fragment.className = 'speech-line';

        let voiceId = 'default';
        let alias = '';
        let textToSpeak = cleanLine;

        const voiceMatch = cleanLine.match(/\{(\d)(?:\(([^)]+)\))?:([^}]+)\}/);
        if (voiceMatch) {
        voiceId = voiceMatch[1];
        alias = voiceMatch[2] || '';
        textToSpeak = voiceMatch[3].trim();
        }

        let displayText = textToSpeak;
        if (voiceMatch) {
        displayText = alias ? `${alias}: *${textToSpeak}*` : `*${textToSpeak}*`;
        }

        fragment.innerHTML = displayText;
        textContainer.appendChild(fragment);

        const utterance = new SpeechSynthesisUtterance(textToSpeak);
        utterance.voice = voices[voiceId] || voices['default'];
        utterance.lang = utterance.voice.lang;

        utterances.push({ utterance, element: fragment, pauses });
    }
}

async function readAll() {
    isReading = true;
    while (currentIndex < utterances.length && isReading) {
        const { utterance, element, pauses } = utterances[currentIndex];
        await speak(utterance, element);
        for (const ms of pauses) await wait(ms);
        if (!isRepeating) currentIndex++;
        else isReading = false;
    }
    if (currentIndex >= utterances.length) {
        const nextIndex = selector.selectedIndex + 1;
        if (nextIndex < selector.options.length) {
        selector.selectedIndex = nextIndex;
        loadAndPlay(selector.value);
        }
    }
}

function stopReading() {
    isReading = false;
    speechSynthesis.cancel();
}

function repeatCurrent() {
    if (!utterances.length) return;
    isRepeating = true;
    stopReading();
    readAll();
}

function loadAndPlay(filename) {
    fetch(baseUrl + 'speechs/' + filename)
        .then(r => r.text())
        .then(text => {
        parseMarkdown(text);
        currentIndex = 0;
        isRepeating = false;
        stopReading();
        readAll();
    });
}

function loadSelector() {
    fetch(baseUrl + 'speechs.md')
        .then(r => r.text())
        .then(text => {
        const lines = text.split(/\n+/).filter(l => l.trim());
        selector.innerHTML = '';
        lines.forEach(line => {
            const opt = document.createElement('option');
            opt.value = line.trim();
            opt.textContent = sanitizeTitle(line);
            selector.appendChild(opt);
        });
        loadAndPlay(selector.value);
    });
}

export function initAudiobook(title, url) {
    baseUrl = url;
    textContainer = document.getElementById('text');
    selector = document.getElementById('selector');

    document.getElementById('btnRead').addEventListener('click', () => {
        isRepeating = false;
        if (!isReading) readAll();
    });

    document.getElementById('btnPause').addEventListener('click', () => stopReading());

    document.getElementById('btnRepeat').addEventListener('click', () => repeatCurrent());

    selector.addEventListener('change', () => loadAndPlay(selector.value));

    speechSynthesis.onvoiceschanged = () => {
        const allVoices = speechSynthesis.getVoices();
        voices['default'] = allVoices.find(v => v.lang.startsWith('es') && v.name.toLowerCase().includes('male')) || allVoices.find(v => v.lang.startsWith('es'));
        voices['1'] = allVoices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('female')) || allVoices.find(v => v.lang.startsWith('en'));
        voices['2'] = allVoices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('female') && v.name !== voices['1']?.name);
        voices['3'] = allVoices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('male')) || allVoices.find(v => v.lang.startsWith('en'));
        loadSelector();
    };

    if (speechSynthesis.getVoices().length) speechSynthesis.onvoiceschanged();
}
