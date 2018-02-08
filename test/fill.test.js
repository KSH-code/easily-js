/* global describe, it */
'use strict'
const { fill, deepEqual } = require('../index')
const { checkEqual } = require('easily-expect')

describe('Test fill', () => {
  it('fill([], 0, 0, 3), [0]', () => {
    checkEqual(true, deepEqual(fill([], 0, 0, 3), [0, 0, 0]))
  })
  it('fill([], 0, 1, 3), [undefined, 0, 0]', () => {
    checkEqual(true, deepEqual(fill([], 0, 1, 3), [undefined, 0, 0]))
  })
  it('fill([1, 2, 3], 0, 1, 2), [1, 0, 3]', () => {
    checkEqual(true, deepEqual(fill([1, 2, 3], 0, 1, 2), [1, 0, 3]))
  })
})
