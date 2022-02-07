/**
 * 
 * EXERCISE 1
 * 
 * @param {*} promise 
 * @param {*} transformer
 * @returns {Promise}
 */
function mapPromise(promise, transformer){
  return new Promise((resolve, reject) => {
    promise
      .then((value) => transformer(value))
      .then((value2) => resolve(value2))
      .catch(err => reject(err))
  });
}

/**
 * 
 * EXERCISE 2
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise){
  return numberPromise
    .then(resolution => { 
      return new Promise((resolve, reject) => {
        if(isNaN(resolution)) {
          reject(`Cannot convert '${resolution}' to a number!`);
        }
        resolve(resolution * resolution);
      })  
    });
}

/**
 * EXERCISE 3
 * 
 * @param {Promise<number | string>} numberPromise 
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise){
  return squarePromise(promise)
    .catch(() => {return 0});
}

/**
 * EXERCISE 4
 * 
 * @param {Promise} promise 
 * @returns {Promise}
 */
function switcheroo(promise){
  return promise.then(resolution => Promise.reject(resolution), resolution2 => Promise.resolve(resolution2));
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};