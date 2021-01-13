/* eslint-disable no-return-await */
function allPromises(listOfPromises) {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    const results = [];

    const promisesWrappedInResolve = listOfPromises.map(Promise.resolve, Promise);
    for (const promise of promisesWrappedInResolve) {
      // eslint-disable-next-line no-await-in-loop
      results.push(await promise.then(async resolvedData => await resolvedData, reject));
      if (results.length === listOfPromises.length) resolve(results);
    }
  });
}

export { allPromises };
