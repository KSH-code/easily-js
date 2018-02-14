/* global describe, it */
'use strict'
const { pick, deepEqual } = require('../index')
const { checkEqual } = require('easily-expect')

describe('Test pick', () => {
  it(`{ a: 1, b: 2, c: 3 }, ['a', 'b']`, () => {
    checkEqual(true, deepEqual({ a: 1, b: 2 }, pick({ a: 1, b: 2, c: 3 }, ['a', 'b'])))
  })
})
