/**
 *
 * @param {object} obj1 - default object
 * @param {object} obj2 - put obj2 in obj1
 * @return obj1 sum obj1
 * @example
 * require('easily-js').assign({ a: 1 }, { b: 2 })
 * => { a: 1, b: 2 }
 */
module.exports = function assign (obj1, obj2) {
  for (let key in obj2) {
    if ((typeof obj1[key] === 'object' && typeof obj2[key] === 'object')) obj1[key] = assign(obj1[key], obj2[key])
    else if (obj1[key] === undefined) obj1[key] = obj2[key]
  }
  return obj1
}
