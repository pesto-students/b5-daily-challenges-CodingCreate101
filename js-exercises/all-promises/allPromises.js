function allPromises(listOfPromises) {
  return new Promise(async (resolve, reject) => {
    const results = [];

    const promisesWrappedInResolve = listOfPromises.map(Promise.resolve, Promise);
    for (const promise of promisesWrappedInResolve) {
      results.push(await promise.then(async resolvedData => await resolvedData, reject));
      if (results.length === listOfPromises.length) resolve(results);
    }
  });
}

export { allPromises };
