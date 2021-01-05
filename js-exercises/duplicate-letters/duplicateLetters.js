function duplicateLetters(str) {
  const arr = str.split('');
  let highestCount = 1;

  const map = new Map();
  arr.forEach(char => {
    if (map.has(char)) {
      const potentialHighestCount = map.get(char) + 1;
      map.set(char, potentialHighestCount);
      highestCount = Math.max(potentialHighestCount, highestCount);
    } else {
      map.set(char, 1);
    }
  });
  return highestCount > 1 ? highestCount : false;
}

export { duplicateLetters };
