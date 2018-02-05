/* global describe, it */
'use strict'
const { isEqual } = require('../index')
const { checkEqual } = require('easily-expect')

describe('Test isEqual', () => {
  it('{}, {}', () => {
    checkEqual(true, isEqual({}, {}))
  })
  it('{ a: 1 }, { a: 1 }', () => {
    checkEqual(true, isEqual({ a: 1 }, { a: 1 }))
  })
  it('{ a: 1, b: { a: 4 } }, { a: 1, b: { a: 3 } }', () => {
    checkEqual(false, isEqual({ a: 1, b: { a: 4 } }, { a: 1, b: { a: 3 } }))
  })
  it('{ a: 1, b: { a: 4 } }, { a: 1, b: { a: 5 } }', () => {
    checkEqual(false, isEqual({ a: 1, b: { a: 4 } }, { a: 1, b: { a: 5 } }))
  })
  it('[1, 2], [1, 2]', () => {
    checkEqual(true, isEqual([1, 2], [1, 2]))
  })
})
