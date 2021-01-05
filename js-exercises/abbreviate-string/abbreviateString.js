function getFirstAndLastWords(str) {
  const firstWord = str.substring(0, str.indexOf(' '));
  const lastWord = str.substring(str.lastIndexOf(' ') + 1);

  if (firstWord === '') {
    return [str, ''];
  }

  return [firstWord, lastWord];
}

function abbreviateString(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Input must be a string');
  }

  const [firstWord, lastWord] = getFirstAndLastWords(str.trim());

  if (firstWord === '') {
    return '';
  }

  if (lastWord === '') {
    return firstWord;
  }

  return `${firstWord} ${lastWord.charAt(0).toUpperCase()}.`;
}

export { abbreviateString };
