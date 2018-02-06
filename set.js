const deepEqual = require('./deepEqual')

/**
 * delete duplicated value
 * @param {array} arr
 * @returns {array}
 * @example
 *
 * require('easily-js').set([1, 2, 1])
 * => [1, 2]
 */
module.exports = function deleteDuplicatedValue (arr) {
  let tempObject = {}
  const tempArr = []
  const tempObjectArr = []
  for (let j = 0; j < arr.length; j++) {
    const value = arr[j]
    if (!tempObject[value]) {
      tempArr.push(value)
      tempObject[value] = true
    }
    let isFind = false
    if (typeof value === 'object') {
      isFind = false
      for (let key in tempObjectArr) {
        if (deepEqual(tempObjectArr[key], value)) {
          isFind = true
          break
        }
      }
      if (!isFind && Object.keys(value).length) {
        tempArr.push(value)
        tempObjectArr.push(value)
      }
    }
  }
  return tempArr
}
