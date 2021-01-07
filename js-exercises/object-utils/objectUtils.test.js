/* eslint-disable no-unused-vars */
// eslint-disable-next-line object-curly-newline
import { isObject, map, filter, invert, merge, all, some } from './objectUtils';

describe('isObject', () => {
  it('should indicate whether input is an object or not', () => {
    expect(isObject(2)).toEqual(false);
    expect(isObject([])).toEqual(false);
    expect(isObject(null)).toEqual(false);
    expect(isObject({})).toEqual(true);
  });
});

describe('Object map', () => {
  it('should map through object and execute function to all keys and values', () => {
    const obj = {
      a: 10,
      b: 20,
      e: 30,
    };

    expect(map(obj, ([key, val]) => [key.toUpperCase(), val * 10])).toEqual({
      A: 100,
      B: 200,
      E: 300,
    });

    expect(() => map(2, () => true)).toThrow();
    expect(() => map([], () => true)).toThrow();
    expect(() => map(null, () => true)).toThrow();
  });
});

describe('Object filter', () => {
  it('should filter object on the basis of keys or values', () => {
    const obj = {
      a: 10,
      b: 20,
      e: 20,
    };
    expect(filter(obj, ([key, val]) => val === 20)).toEqual({
      b: 20,
      e: 20,
    });

    expect(filter(obj, ([key, val]) => key === 'a')).toEqual({
      a: 10,
    });
    expect(() => filter(2, () => true)).toThrow();
  });
});

describe('Invert an object', () => {
  it('should invert keys and values of an object', () => {
    const obj = {
      a: 10,
      b: 20,
      e: 20,
    };
    expect(invert(obj)).toEqual({
      10: 'a',
      20: 'e',
    });

    expect(() => invert(2, () => true)).toThrow();
  });
});

describe('Merge n object', () => {
  it('should invert keys and values of an object', () => {
    const arrayOfObjects = [
      {
        a: 10,
        b: 20,
        e: 20,
      },
      {
        e: 20,
        f: 10,
      },
    ];
    expect(merge(arrayOfObjects)).toEqual({
      a: 10,
      b: 20,
      e: 20,
      f: 10,
    });

    expect(() => merge(2, () => true)).toThrow();
  });
});

describe('All method for objects', () => {
  it('should check each property of an object passes a given condition', () => {
    const obj = {
      a: 10,
      b: 20,
      e: 20,
    };
    expect(all(obj, ([key, val]) => val > 2)).toEqual(true);
    expect(all(obj, ([key, val]) => val > 10)).toEqual(false);
    expect(all(obj, ([key, val]) => val > 30)).toEqual(false);
    expect(all(obj, ([key, val]) => typeof key === 'string')).toEqual(true);

    expect(() => all(2, () => true)).toThrow();
  });
});

describe('"Some" method for objects', () => {
  it('should check if at least one property of an object that passes a given condition', () => {
    const obj = {
      a: 10,
      b: 20,
      e: 20,
    };
    expect(some(obj, ([key, val]) => val > 2)).toEqual(true);
    expect(some(obj, ([key, val]) => val > 10)).toEqual(true);
    expect(some(obj, ([key, val]) => val > 30)).toEqual(false);
    expect(some(obj, ([key, val]) => typeof key === 'string')).toEqual(true);

    expect(() => some(2, () => true)).toThrow();
  });
});
