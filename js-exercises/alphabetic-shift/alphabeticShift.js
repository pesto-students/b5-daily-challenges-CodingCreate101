function alphabeticShift(str) {
  let shiftedString = '';
  for (const char of str) {
    shiftedString += String.fromCharCode(char.charCodeAt(0) + 1);
  }
  return shiftedString;
}

//* Following code is applicable if chars need to be cycled, example Z -> A,
//* i.e, if input string has char `Z`, it shifts to A, instead of `[`
// function alphabeticShift(str) {
//   let shiftedString = '';
//   for (const char of str) {
//     const ASCIIofCurrentChar = char.charCodeAt(0);

//     const isCurrentCharZ = ASCIIofCurrentChar === 90 || ASCIIofCurrentChar === 122;
//     const ASCIItoShift = isCurrentCharZ
//       ? ASCIIofCurrentChar - 25
//       : ASCIIofCurrentChar + 1;

//     shiftedString += String.fromCharCode(ASCIItoShift);
//   }
//   return shiftedString;
// }

export { alphabeticShift };
