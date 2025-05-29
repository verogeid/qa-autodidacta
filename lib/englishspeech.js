// englishspeech.js

import { loadVoices, loadFileList, loadMarkdownText } from './loader.js';
import { parseMarkdown } from './parser.js';
import * as tts from './tts.js';
import { createFooterControls, initUI } from './ui.js';

async function init() {
  try {
    const voices = await loadVoices();
    if (!voices.length) {
      alert('No se encontraron voces disponibles en el navegador.');
      return;
    }
    tts.setVoices(voices);

    const files = await loadFileList('files.txt');
    if (!files.length) {
      alert('No se encontraron archivos para leer.');
      return;
    }

    // Aquí podrías crear un dropdown para seleccionar archivos si quieres
    const mdText = await loadMarkdownText(files[0]);
    if (!mdText) {
      alert('Error cargando el archivo Markdown.');
      return;
    }

    const phrases = parseMarkdown(mdText);
    if (!phrases.length) {
      alert('No se encontraron frases para leer.');
      return;
    }

    tts.setPhrases(phrases);

    createFooterControls();
    initUI(phrases);

  } catch (e) {
    console.error('Error en la inicialización:', e);
    alert('Ocurrió un error al iniciar la aplicación.');
  }
}

window.addEventListener('DOMContentLoaded', init);
