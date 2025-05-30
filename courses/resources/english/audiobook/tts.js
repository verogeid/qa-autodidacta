// tts.js
const debugFlag = false;

let voices = [];
let phrases = [];
let currentIndex = 0;
let isPlaying = false;
let isPaused = false;
let isRepeating = false;
let utterance = null;

export function setVoices(v) {
  voices = v;
}

export function setPhrases(p) {
  phrases = p;

  if (debugFlag) console.log('Frases recibidas en setPhrases: ', phrases);

  currentIndex = 0;
}

export function getCurrentIndex() {
  return currentIndex;
}

export function isPlayingState() {
  return isPlaying;
}

export function isPausedState() {
  return isPaused;
}

export function isRepeatingState() {
  return isRepeating;
}

export function toggleRepeat() {
  isRepeating = !isRepeating;
}

export function speakCurrentPhrase(onEndCallback) {
  if (phrases.length === 0 || !voices.length) {
    console.warn('No hay frases o voces para reproducir.');
    if (debugFlag) {
      if (phrases.length === 0) console.log(`phrases.length: ${phrases.length}`);
      if (!voices.length) console.log(`voices.length: ${voices.length}`);
    } 
    return;
  }

  if (isPlaying) {
    cancel();
  }

  const phrase = phrases[currentIndex];
  if (!phrase || !phrase.textSpeech) {
    console.warn('Frase inválida o vacía.');
    return;
  }

  utterance = new SpeechSynthesisUtterance(phrase.textSpeech);
  utterance.voice = voices[0]; // Selección simple, se puede mejorar para elegir voz
  utterance.rate = 1;
  utterance.pitch = 1;

  utterance.onend = () => {
    isPlaying = false;
    isPaused = false;
    if (isRepeating) {
      speakCurrentPhrase(onEndCallback);
    } else {
      currentIndex++;
      if (currentIndex < phrases.length) {
        setTimeout(() => speakCurrentPhrase(onEndCallback), phrases[currentIndex - 1].pauseMs || 400);
      }
    }
    if (onEndCallback) onEndCallback();
  };

  utterance.onerror = (e) => {
    console.error('Error en síntesis de voz:', e.error);
    isPlaying = false;
    isPaused = false;
    if (onEndCallback) onEndCallback();
  };

  speechSynthesis.speak(utterance);
  isPlaying = true;
  isPaused = false;
}

export function pause() {
  if (isPlaying && !isPaused) {
    speechSynthesis.pause();
    isPaused = true;
  }
}

export function resume() {
  if (isPlaying && isPaused) {
    speechSynthesis.resume();
    isPaused = false;
  }
}

export function cancel() {
  if (isPlaying) {
    speechSynthesis.cancel();
    isPlaying = false;
    isPaused = false;
  }
}

export function nextPhrase(onEndCallback) {
  if (currentIndex < phrases.length - 1) {
    cancel();
    currentIndex++;
    speakCurrentPhrase(onEndCallback);
  }
}

export function prevPhrase(onEndCallback) {
  if (currentIndex > 0) {
    cancel();
    currentIndex--;
    speakCurrentPhrase(onEndCallback);
  }
}
