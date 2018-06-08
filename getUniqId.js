/**
 *
 * @param {anything} object - anything
 * @example
 * require('easily-js').getUniqId()
 * => 'unique number'
 */
module.exports = function getUniqId (rate = 1) {
  return `${Date.now() * rate}${process.hrtime().reduce((p, c) => p * c)}`
}
