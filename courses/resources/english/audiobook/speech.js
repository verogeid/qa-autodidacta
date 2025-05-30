// speech.js
const ts = Date.now();

const selector = document.getElementById('selector');
const textContainer = document.getElementById('text');

let phrases = [];

(async function () {
  const { loadVoices, loadFileList, loadMarkdownText } = await import(`./loader.js?ts=${ts}`);
  const { parseMarkdown } = await import(`./parser.js?ts=${ts}`);
  const tts = await import(`./tts.js?ts=${ts}`);
  const { createFooterControls, initUI, highlightCurrentPhrase } = await import(`./ui.js?ts=${ts}`);

  async function loadAndParseFile(filename) {
    const mdText = await loadMarkdownText(new URL(`speechs/${filename}`, import.meta.url).href);
    phrases = parseMarkdown(mdText);

    if (debugFlag) console.log('Frases recibidas de parseMarkdown: ', phrases);

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

    const files = await loadFileList('./speechs.md');
    if (!files.length) {
      alert('No se encontraron archivos para leer.');
      return;
    }

    files.forEach(file => {
      const opt = document.createElement('option');
      opt.value = file;
      opt.textContent = file;
      selector.appendChild(opt);
    });

    createFooterControls();

    await loadAndParseFile(files[0]);
    initUI(phrases);

    selector.onchange = async () => {
      tts.cancel();
      await loadAndParseFile(selector.value);
      initUI(phrases);
    };
  }

  init();
})();
