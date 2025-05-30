// speech.js
const ts = Date.now();

async function initModules() {
  const { loadVoices, loadFileList, loadMarkdownText } = await import(`./loader.js?ts=${ts}`);
  const { parseMarkdown } = await import(`./parser.js?ts=${ts}`);
  const tts = await import(`./tts.js?ts=${ts}`);
  const { createFooterControls, initUI, highlightCurrentPhrase } = await import(`./ui.js?ts=${ts}`);

  return { loadVoices, loadFileList, loadMarkdownText, parseMarkdown, tts, createFooterControls, initUI, highlightCurrentPhrase };
}

const selector = document.getElementById('selector');
const textContainer = document.getElementById('text');

let phrases = [];

async function loadAndParseFile(filename) {
  const mdText = await loadMarkdownText('./speechs/' + filename);
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

  const files = await loadFileList('speechs.md');
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