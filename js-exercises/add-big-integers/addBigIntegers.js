function addBigIntegers(intString) {
  const sum = intString.split('\n').reduce((acc, i) => {
    let currentSum = acc;
    currentSum += Number(i);
    return currentSum;
  }, 0);
  return String(sum);
}

export { addBigIntegers };
