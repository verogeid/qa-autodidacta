import { loadVoices, loadFileList, loadMarkdownText } from './loader.js';
    import { parseMarkdown } from './parser.js';
    import * as tts from './tts.js';
    import { createFooterControls, initUI, highlightCurrentPhrase } from './ui.js';

    const selector = document.getElementById('selector');
    const textContainer = document.getElementById('text');

    let phrases = [];

    async function loadAndParseFile(filename) {
      const mdText = await loadMarkdownText(filename);
      phrases = parseMarkdown(mdText);
      tts.setPhrases(phrases);
      highlightCurrentPhrase(phrases, tts.getCurrentIndex());
    }

    async function init() {
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

      // Llenar selector con archivos
      files.forEach(file => {
        const opt = document.createElement('option');
        opt.value = file;
        opt.textContent = file;
        selector.appendChild(opt);
      });

      // Crear controles dinámicos en footer
      createFooterControls();

      // Cargar primer archivo y configurar UI
      await loadAndParseFile(files[0]);
      initUI(phrases);

      // Cambiar archivo al seleccionar otro
      selector.onchange = async () => {
        tts.cancel();
        await loadAndParseFile(selector.value);
        initUI(phrases);
      };
    }

    window.addEventListener('DOMContentLoaded', init);