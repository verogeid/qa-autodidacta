// ui.js
const debugFlag = true;

export function createFooterControls() {
  const footer = document.querySelector('footer');
  if (!footer) {
    console.warn('No se encontró el elemento <footer> en el DOM.');
    return;
  }

  footer.innerHTML = `
    <button id="btnPrev" aria-label="Previous">⏪</button>
    <button id="btnPlayPause" aria-label="PlayPause">▶️</button>
    <button id="btnNext" aria-label="Next">⏩</button>
    <button id="btnRepeat" aria-label="Repeat">🔁</button>
    <button id="btnRestart" aria-label="Restart">⏮️</button>
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
      return `<mark tabindex="0">${p.textDisplay}</mark>`;
    } else if (p.textDisplay === '\n') {
      return '<br>';
    } else {
      return p.textDisplay;
    }
  }).join(' ');
}

export function initUI(phrases, tts) {
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

    btnPlayPause.textContent = (playing && !paused) ? '⏸️' : '▶️';
    btnRepeat.style.backgroundColor = tts.isRepeatingState() ? '#AAF' : '';
  }

  function updateHighlight() {
    highlightCurrentPhrase(phrases, tts.getCurrentIndex());
  }

  btnPlayPause.onclick = () => {
    if (debugFlag) console.log('btnPlayPause.onclick');

    if (tts.isPlayingState()) {
      tts.isPausedState() ? tts.resume() : tts.pause();
    } else {
      if (phrases.length === 0) {
        alert('No hay frases para reproducir.');
        return;
      }
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
    tts.setPhrases(phrases);
    updateHighlight();
    updateButtons();
  };

  updateHighlight();
  updateButtons();
}
