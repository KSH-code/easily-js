/**
 *
 * @param {anything} object - anything
 * @example
 * require('easily-js').getType('')
 * => 'string'
 */
module.exports = function getType (object) {
  let type = typeof object
  if (type === 'object') {
    if (!object) type = 'null'
    else if (typeof object.length === 'number') type = 'array'
  }
  return type
}
