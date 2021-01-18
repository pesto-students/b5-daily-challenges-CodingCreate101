/* eslint-disable no-plusplus */
function rangeIter(lowerBound, upperBound) {
  if (typeof lowerBound === 'undefined' || typeof upperBound === 'undefined') {
    throw new TypeError('/undefined is not a number/');
  }

  if (!Number.isInteger(lowerBound) || !Number.isInteger(upperBound)) {
    throw new TypeError(`Expected numbers. Received ${typeof lowerBound} and ${typeof upperBound}`);
  }

  return {
    current: lowerBound,
    lowerBound,
    upperBound,
    [Symbol.iterator]() {
      this.current = lowerBound;
      this.upperBound = upperBound;
      return this;
    },

    next() {
      return {
        done: this.current > this.upperBound || this.lowerBound > this.upperBound,
        value: this.current++,
      };
    },
  };
}

export { rangeIter };
