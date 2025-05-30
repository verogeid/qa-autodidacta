// parser.js
const debugFlag = true;

export function parseMarkdown(text) {
  if (!text) return [];

  let defaultVoice = '4';
  const phrases = [];

  const blocks = splitIntoBlocks(text);

  for (const block of blocks) {
    // Cambiar idioma por marcador {es} o {en}
    if (block.trim() === '{es}') {
      defaultVoice = '4';
      continue;
    }
    if (block.trim() === '{en}') {
      defaultVoice = '5';
      continue;
    }

    const { voice, content } = extractVoiceAndContent(block, defaultVoice);
    const lines = content.split('\n');

    for (const line of lines) {
      const fragments = splitLineIntoFragments(line);
      for (const { text, pauseMs } of fragments) {
        if (!text.trim()) continue;

        phrases.push({
          textDisplay: formatDisplay(text),
          textSpeech: text,
          voice,
          lang: voice === '5' ? 'en' : 'es',
          pauseMs,
        });
      }
    }
  }

  return phrases;
}

function splitIntoBlocks(text) {
  return text.split(/(?=\{(?:\d)(?:\([^)]+\))?:)/g);
}

function extractVoiceAndContent(block, defaultVoice) {
  const voiceMatch = block.match(/^\{(\d)(?:\(([^)]+)\))?:/);
  if (voiceMatch) {
    const voice = voiceMatch[1];
    const content = block.replace(/^\{\d(?:\([^)]+\))?:/, '').replace(/\}$/, '');
    return { voice, content };
  }
  return { voice: defaultVoice, content: block };
}

function splitLineIntoFragments(line) {
  if (!line.trim()) return [{ text: '', pauseMs: 800 }];

  const pauseRegex = /\[(short pause|pause|long pause)\]/gi;
  const pauseMap = {
    'short pause': 200,
    'pause': 400,
    'long pause': 800,
  };

  const fragments = [];
  let lastIndex = 0;
  let match;

  while ((match = pauseRegex.exec(line)) !== null) {
    const text = line.slice(lastIndex, match.index).trim();
    if (text) fragments.push({ text, pauseMs: 400 });

    const pauseLabel = match[1].toLowerCase();
    fragments.push({ text: match[0], pauseMs: pauseMap[pauseLabel] || 400 });

    lastIndex = pauseRegex.lastIndex;
  }

  const remaining = line.slice(lastIndex).trim();
  if (remaining) fragments.push({ text: remaining, pauseMs: 400 });

  return fragments;
}

function formatDisplay(text) {
  return `<i>${text}</i>`;
}
