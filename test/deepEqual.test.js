/* global describe, it */
'use strict'
const { deepEqual } = require('../index')
const { checkEqual } = require('easily-expect')

describe('Test deepEqual', () => {
  it('{}, {}', () => {
    checkEqual(true, deepEqual({}, {}))
  })
  it('{ a: 1 }, { a: 1 }', () => {
    checkEqual(true, deepEqual({ a: 1 }, { a: 1 }))
  })
  it('{ a: 1, b: { a: 4 } }, { a: 1, b: { a: 3 } }', () => {
    checkEqual(false, deepEqual({ a: 1, b: { a: 4 } }, { a: 1, b: { a: 3 } }))
  })
  it('{ a: 1, b: { a: 4 } }, { a: 1, b: { a: 5 } }', () => {
    checkEqual(false, deepEqual({ a: 1, b: { a: 4 } }, { a: 1, b: { a: 5 } }))
  })
  it('[1, 2], [1, 2]', () => {
    checkEqual(true, deepEqual([1, 2], [1, 2]))
  })
})
