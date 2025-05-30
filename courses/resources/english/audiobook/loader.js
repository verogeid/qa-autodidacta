// loader.js
const debugFlag = true;

export async function loadVoices() {
  return new Promise((resolve) => {
    let voices = speechSynthesis.getVoices();
    if (voices.length) {
      resolve(voices);
    } else {
      // Esperar evento voiceschanged para cargar voces si no están listas
      speechSynthesis.onvoiceschanged = () => {
        voices = speechSynthesis.getVoices();
        resolve(voices);
      };
    }
  });
}

function addTimestampToUrl(url) {
  return url.includes('?') ? `${url}&ts=${Date.now()}` : `${url}?ts=${Date.now()}`;
}

export async function loadFileList(filePath) {
  try {
    if (debugFlag) console.log(`filePath: ${filePath}`);

    const urlWithTs = addTimestampToUrl(filePath);
    const res = await fetch(urlWithTs);
    if (!res.ok) throw new Error(`Error al cargar ${filePath}: ${res.status}`);
    const text = await res.text();

    if (debugFlag) console.log(`filePath text: ${text}`);

    return text.split('\n').filter(line => line.trim());
  } catch (err) {
    console.error(err);
    return [];
  }
}

export async function loadMarkdownText(filename, baseURL = import.meta.url) {
  try {
    const fullPath = new URL(filename, baseURL).href;
    const urlWithTs = addTimestampToUrl(fullPath);
    const res = await fetch(urlWithTs);
    if (!res.ok) throw new Error(`Error cargando archivo: ${res.statusText}`);
    return await res.text();
  } catch (e) {
    console.error(e);
    return '';
  }
}