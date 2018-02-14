/**
 *
 * @param {object} obj - []
 * @param {array} keys - ['a', 'b']
 * @example
 * require('easily-js').pick({ a: 1, b: 2, c: 3 }, ['a', 'b'])
 * => { a: 1, b: 2 }
 */
module.exports = function pick (obj, keys) {
  let i = -1
  const returnObj = {}
  while (++i < keys.length) {
    returnObj[keys[i]] = obj[keys[i]]
  }
  return returnObj
}
