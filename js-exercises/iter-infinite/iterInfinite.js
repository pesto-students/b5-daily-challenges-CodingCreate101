function* count(start, step = 1) {
  let currentCount = start;
  while (currentCount > 0) {
    yield currentCount;
    currentCount += step;
  }
}

function* cycle(iter, n = Infinity) {
  let currentCount = n;
  while (currentCount > 0) {
    for (const item of iter) {
      yield item;
    }
    currentCount -= 1;
  }
}

function* repeat(value, n = Infinity) {
  let currentCount = n;
  while (currentCount > 0) {
    yield value;
    currentCount -= 1;
  }
}

//! My comment - Work in progress - trying different method

// function iter(fn) {
//   return function* (value, start) {
//     const currentCount = start;
//     // while (currentCount > 0) {
//     for (let index = 0; index < 6; index++) {
//       console.log(currentCount)
//       yield* fn(currentCount, start, value);
//     }
//     // }
//   };
// }

// const repeat = iter(function* (currentCount, step = 1, value) {
//   yield value;
//   currentCount -= 1;
//   console.log(currentCount)
// });

// console.log([...repeat(2, 2)]);

// console.log(count());

// function* (start, step = 1) {
//   yield currentCount;
//   currentCount += step;
// };

// 10 11 12 13 14 ...

// console.log([...cycle('ABCD', 2)]);

// --> A B C D A B C D ...

// console.log([...repeat(10, 3)]);
// --> 10 10 10
// for (const item of count(1, 2)) {
//   if (item > 10) {
//     break;
//   }
//   console.log(item);
// }
// console.log([...count(10, 2)]);

export { count, cycle, repeat };
