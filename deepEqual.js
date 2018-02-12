const fillUndefined = require('./fillUndefined')
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
    let obj1 = obj[i]
    const obj2 = obj[i + 1]
    if (Array.isArray(obj1)) obj1 = fillUndefined(obj1)
    for (let key in obj1) {
      const value1 = obj1[key]
      const value2 = obj2[key]
      const isNaN1 = isNaN(value1)
      const isNaN2 = isNaN(value2)
      if (typeof obj1[key] === 'object') {
        if (deepEqual(value1, value2) === false) return false
      } else if (value1 !== value2) if ((!isNaN1 && !isNaN2) || (isNaN1 && !isNaN2) || (!isNaN1 && isNaN2)) return false
    }
    if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
  }
  return true
}
