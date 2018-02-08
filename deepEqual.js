/**
 * compare objects
 * @param {objects} obj
 * @returns {boolean}
 * @example
 *
 * require('easily-js').deepEqual({ a: 1, b: { a: 4 } }, { a: 1, b: { a: 3 } }))
 * => true
 */
module.exports = function deepEqual (...obj) {
  if (obj.length <= 1) return true
  for (let i = 0; i < obj.length - 1; i++) {
    const obj1 = obj[i]
    const obj2 = obj[i + 1]
    if (Array.isArray(obj1)) {
      for (let j = 0; j < obj1.length; j++) {
        if (obj1[j] === undefined) obj1[j] = undefined
      }
    }
    for (let key in obj1) {
      if (typeof obj1[key] === 'object') {
        if (deepEqual(obj1[key], obj2[key]) === false) return false
      } else if (obj2[key] !== obj1[key]) return false
    }
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
  }
  return true
}
