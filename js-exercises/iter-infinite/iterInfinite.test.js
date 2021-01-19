import { count, cycle, repeat } from './iterInfinite';

describe('Count', () => {
  test('should count infinitely', () => {
    const countIter = count(1, 2);

    const received = [];
    for (const ele of countIter) {
      if (ele > 10) {
        break;
      }
      received.push(ele);
    }
    expect(received).toEqual([1, 3, 5, 7, 9]);
  });
});

describe('Cycle', () => {
  test("should Cycle 'n' times", () => {
    const cycleIter = cycle('AB', 2);

    const received = [];
    for (const ele of cycleIter) {
      received.push(ele);
    }
    expect(received).toEqual(['A', 'B', 'A', 'B']);
  });
});

describe('Repeat', () => {
  test("should Repeat 'n' times", () => {
    const repeatIter = repeat('AB', 3);

    const received = [];
    for (const ele of repeatIter) {
      received.push(ele);
    }
    expect(received).toEqual(['AB', 'AB', 'AB']);
  });
});
