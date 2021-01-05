function addBigIntegers(intString) {
  // 9999999999999999 MAX possible number

  const numbersList = intString.split('\n').map(num => {
    const maxSize = 5;
    const yardstick = new RegExp(`.{${maxSize}}`, 'g'); // /.{10}/g;
    const pieces = num.match(yardstick);
    const accumulated = pieces.length * maxSize;
    const modulo = num.length % accumulated;
    if (modulo) pieces.push(num.slice(accumulated));
    // console.log(pieces)
    return pieces;
  });

  console.log(numbersList, 'numbersList');

  // const sum = intString.split('\n').reduce((acc, i) => {
  //   let currentSum = acc;
  //   currentSum += Number(i);
  //   return currentSum;
  // }, 0);
  return numbersList;
  // return String(sum);
}

export { addBigIntegers };
