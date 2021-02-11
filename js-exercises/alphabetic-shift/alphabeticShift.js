function alphabeticShift(str) {
  let shiftedString = '';
  for (const char of str) {
    shiftedString += String.fromCharCode(char.charCodeAt(0) + 1);
  }
  return shiftedString;
}

//* Following code is applicable if chars need to be cycled, example Z -> A,
//* i.e, if input string has char `Z`, it shifts to A, instead of `[`

// function getShiftedCharOf(char) {
//   const ASCII = char.charCodeAt(0);

//   const isCurrentCharZ = ASCII === 90 || ASCII === 122;

//   if (isCurrentCharZ) {
//     // Shift Z -> A || z -> a
//     return String.fromCharCode(ASCII - 25);
//   }

//   return String.fromCharCode(ASCII + 1);
// }

// function alphabeticShift(str) {
//   let shiftedString = '';
//   for (const currentChar of str) {
//     shiftedString += getShiftedCharOf(currentChar);
//   }
//   return shiftedString;
// }

export { alphabeticShift };
