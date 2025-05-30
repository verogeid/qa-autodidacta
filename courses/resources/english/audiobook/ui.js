// ui.js

import * as tts from './tts.js';

export function createFooterControls() {
  const footer = document.querySelector('footer');
  if (!footer) {
    console.warn('No se encontró el elemento <footer> en el DOM.');
    return;
  }

  footer.innerHTML = `
    <button id="btnPrev" ariaLabel: "Previous">⏪</button>
    <button id="btnPlayPause" ariaLabel="PlayPause">▶️</button>
    <button id="btnNext" ariaLabel="Next">⏩</button>
    <button id="btnRepeat" ariaLabel="Repeat">🔁</button>
    <button id="btnRestart" ariaLabel="Restart">⏮️</button>
  `;
}

export function highlightCurrentPhrase(phrases, currentIndex) {
  const container = document.getElementById('text');
  if (!container) {
    console.warn('No se encontró el contenedor con id="text".');
    return;
  }

  container.innerHTML = phrases.map((p, i) => {
    if (i === currentIndex) {
      // Usar backticks para template literal
      return `<mark tabindex="0">${p.textDisplay}</mark>`;
    } else if (p.textDisplay === '\n') {
      return '<br>';
    } else {
      return p.textDisplay;
    }
  }).join(' ');
}

export function initUI(phrases) {
  const btnPlayPause = document.getElementById('btnPlayPause');
  const btnPrev = document.getElementById('btnPrev');
  const btnNext = document.getElementById('btnNext');
  const btnRepeat = document.getElementById('btnRepeat');
  const btnRestart = document.getElementById('btnRestart');

  if (!btnPlayPause || !btnPrev || !btnNext || !btnRepeat || !btnRestart) {
    console.warn('Faltan botones de control en el DOM.');
    return;
  }

  function updateButtons() {
    const playing = tts.isPlayingState();
    const paused = tts.isPausedState();
    btnPlayPause.textContent = playing
      ? (paused ? '▶️' : '⏸️')
      : '▶️';

    btnRepeat.style.backgroundColor = tts.isRepeatingState() ? '#AAF' : '';
  }

  function updateHighlight() {
    highlightCurrentPhrase(phrases, tts.getCurrentIndex());
  }

  btnPlayPause.onclick = () => {
    if (tts.isPlayingState()) {
      if (tts.isPausedState()) {
        tts.resume();
      } else {
        tts.pause();
      }
    } else {
      tts.speakCurrentPhrase(() => {
        updateHighlight();
        updateButtons();
      });
    }
    updateButtons();
  };

  btnPrev.onclick = () => {
    tts.prevPhrase(() => {
      updateHighlight();
      updateButtons();
    });
  };

  btnNext.onclick = () => {
    tts.nextPhrase(() => {
      updateHighlight();
      updateButtons();
    });
  };

  btnRepeat.onclick = () => {
    tts.toggleRepeat();
    updateButtons();
  };

  btnRestart.onclick = () => {
    tts.cancel();
    tts.setPhrases(phrases); // Reiniciar índice a 0
    updateHighlight();
    updateButtons();
  };

  updateHighlight();
  updateButtons();
}
