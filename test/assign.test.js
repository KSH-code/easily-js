/* global describe, it */
'use strict'
const { assign } = require('../index')
const { checkEqual } = require('easily-expect')

describe('assign test', () => {
  it('{ a: 1 }, { b: 2 }', () => {
    checkEqual({ a: 1, b: 2 }, assign({ a: 1 }, { b: 2 }))
  })
  it('{ a: 1 }, { b: 2, c: { a: 1 } }', () => {
    checkEqual({ a: 1, b: 2, c: { a: 1 } }, assign({ a: 1 }, { b: 2, c: { a: 1 } }))
  })
  it('{ a: 1, c: {} }, { b: 2, c: { a: 1 } }', () => {
    checkEqual({ a: 1, b: 2, c: { a: 1 } }, assign({ a: 1, c: {} }, { b: 2, c: { a: 1 } }))
  })
})
