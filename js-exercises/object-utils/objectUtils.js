//* Helper function
function isObject(obj) {
  return typeof obj === 'object' && !Array.isArray(obj) && obj !== null;
}

function isArrayOfObjects(arrayOfObjects) {
  if (Array.isArray(arrayOfObjects)) {
    // eslint-disable-next-line consistent-return
    arrayOfObjects.forEach(ele => {
      if (!isObject(ele)) {
        const message = `Expected all array items to be objects, found at least one ${typeof ele}, instead`;
        return { hasError: true, message };
      }
    });
  } else {
    const message = `Expected array of objects, recieved ${typeof arrayOfObjects}`;
    return { hasError: true, message };
  }

  return { hasError: false, message: '' };
}

//* Actual implementations
function map(obj, callback) {
  if (!isObject(obj)) {
    throw new TypeError(`Expected Object, recieved ${typeof obj}`);
  }

  const result = {};
  for (const property of Object.entries(obj)) {
    const [newKey, newValue] = callback(property);
    result[newKey] = newValue;
  }

  return result;
}

function filter(obj, callback) {
  if (!isObject(obj)) {
    throw new TypeError(`Expected Object, recieved ${typeof obj}`);
  }

  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (callback([key, value])) {
      result[key] = value;
    }
  }

  return result;
}

function invert(obj) {
  if (!isObject(obj)) {
    throw new TypeError(`Expected Object, recieved ${typeof obj}`);
  }
  //! Does not account for duplicate values
  return map(obj, ([key, value]) => [value, key]);
}

function merge(arrayOfObjects) {
  const { hasError, message } = isArrayOfObjects(arrayOfObjects);
  if (hasError) {
    throw new TypeError(message);
  }

  let result = {};
  for (const obj of arrayOfObjects) {
    result = { ...result, ...obj };
  }

  return result;
}

function all(obj, callback) {
  if (!isObject(obj)) {
    throw new TypeError(`Expected Object, recieved ${typeof obj}`);
  }

  for (const property of Object.entries(obj)) {
    if (!callback(property)) {
      return false;
    }
  }

  return true;
}

function some(obj, callback) {
  if (!isObject(obj)) {
    throw new TypeError(`Expected Object, recieved ${typeof obj}`);
  }

  for (const property of Object.entries(obj)) {
    if (callback(property)) {
      return true;
    }
  }

  return false;
}

// eslint-disable-next-line object-curly-newline
export { isObject, map, filter, invert, merge, all, some };
