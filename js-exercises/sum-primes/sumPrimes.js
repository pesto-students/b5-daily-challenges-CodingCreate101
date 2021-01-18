//! Work In Progress
function isPrime(num) {
  if (num < 2) return false;

  for (let k = 2; k < num; k += 1) {
    if (num % k === 0) {
      return false;
    }
  }
  return true;
}

function sumPrimes(upTo) {
  return {
    current: 2,
    [Symbol.iterator]() {
      this.upTo = upTo;
      return this;
    },

    next() {
      for (let i = 2; i < this.upTo; i += 1) {
        if (isPrime(i)) {
          return {
            done: false,
            value: i,
          };
        }
      }
      return { done: true };
    },
  };
}

// function primeGenerator() {

// }

console.log([...sumPrimes(10)]);

export { sumPrimes };
