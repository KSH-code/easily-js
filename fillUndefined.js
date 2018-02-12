/**
 * compare objects
 * @param {array} obj
 * @returns {array}
 * @example
 *
 * require('easily-js').fillUndefined(Array(3))
 * => [undefined, undefined, undefined]
 */
module.exports = function fillUndefined (arr) {
  if (Array.isArray(arr)) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === undefined) arr[j] = undefined
    }
  }
  return arr
}
