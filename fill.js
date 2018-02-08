/**
 *
 * @param {array} _arr - []
 * @param {object} value - value
 * @param {number} startIdx - 0 ~ arr.length -1
 * @param {number} endIdx - 1 ~ arr.length
 * @example
 * require('easily-js').fill([], 0, 0, 3)
 * => [0, 0, 0]
 */
module.exports = function fill (_arr, value, startIdx, endIdx) {
  if (!Array.isArray(_arr)) throw new Error('ValidationError')
  const arr = _arr
  if (startIdx !== undefined && endIdx !== undefined && Number.isInteger(startIdx) && Number.isInteger(endIdx)) {
    if (startIdx > endIdx) {
      const temp = endIdx
      endIdx = startIdx
      startIdx = temp
    }
    if (endIdx > arr.length) {
      arr.length = endIdx
    }
  }
  return arr.fill(value, startIdx, endIdx)
}
