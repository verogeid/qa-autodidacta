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

export async function loadFileList(filePath) {
  try {
    const res = await fetch(filePath);
    if (!res.ok) throw new Error(`Error al cargar ${filePath}: ${res.status}`);
    const text = await res.text();
    return text.split('\n').filter(line => line.trim());
  } catch (err) {
    console.error(err);
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
