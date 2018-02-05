/* global describe, it */
'use strict'
const { set, isEqual } = require('../index')
const { checkEqual } = require('easily-expect')

describe('Test set', () => {
  it('[1, 1, 1, 1, 1]', () => {
    checkEqual(true, isEqual([1], set([1, 1, 1, 1, 1])))
  })
  it('[1, 2, 3, 1, 2]', () => {
    checkEqual(true, isEqual([1, 2, 3], set([1, 2, 3, 1, 2])))
  })
  it('{}, { a: 1 }, {}, { a: 1 }', () => {
    checkEqual(true, isEqual([{}, { a: 1 }], set([{}, { a: 1 }, {}, { a: 1 }])))
  })
})
