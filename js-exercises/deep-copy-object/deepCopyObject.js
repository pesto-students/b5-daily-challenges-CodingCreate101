function isObject(obj) {
  return !Array.isArray(obj) && obj !== null && typeof obj === 'object';
}

function deepCopyObject(objToCopy, shouldCopyDescriptors = false) {
  if (!isObject(objToCopy)) {
    return objToCopy;
  }

  const result = {};
  for (const key of Object.getOwnPropertyNames(objToCopy)) {
    result[key] = deepCopyObject(objToCopy[key], shouldCopyDescriptors);
    if (shouldCopyDescriptors) {
      const currentPropDescriptors = Object.getOwnPropertyDescriptor(objToCopy, key);
      Object.defineProperty(result, key, currentPropDescriptors);
    }
  }

  return result;
}

export { deepCopyObject };
