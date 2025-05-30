// loader.js
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

export async function loadFileList(url) {
  try {
    const res = await fetch(`${url}?ts=${Date.now()}`);
    if (!res.ok) throw new Error(`Error cargando lista: ${res.statusText}`);
    const text = await res.text();
    return text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
  } catch (e) {
    console.error(e);
    return [];
  }
}

export async function loadMarkdownText(filename) {
  try {
    const res = await fetch(`${filename}?ts=${Date.now()}`);
    if (!res.ok) throw new Error(`Error cargando archivo: ${res.statusText}`);
    return await res.text();
  } catch (e) {
    console.error(e);
    return '';
  }
}
