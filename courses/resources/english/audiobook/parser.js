// parser.js
export function parseMarkdown(text) {
  if (!text) return [];

  // Divide el texto en líneas y luego en frases simples separadas por puntos, signos de exclamación o interrogación
  const lines = text.split('\n');
  const phrases = [];

  for (const line of lines) {
    if (!line.trim()) {
      // Pausa larga para saltos de línea vacíos
      phrases.push({ textDisplay: '\n', textSpeech: '', pauseMs: 800 });
      continue;
    }

    // Divide en frases por signos de puntuación (simplificado)
    const parts = line.match(/[^.!?]+[.!?]?/g) || [line];
    for (const part of parts) {
      const phraseText = part.trim();
      if (!phraseText) continue;

      phrases.push({
        textDisplay: phraseText,
        textSpeech: phraseText,
        pauseMs: 400, // pausa estándar entre frases
      });
    }
  }

  return phrases;
}
