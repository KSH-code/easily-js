/* global describe, it */
'use strict'
const { fillUndefined, deepEqual } = require('../index')
const { checkEqual } = require('easily-expect')

describe('Test fillUndefined', () => {
  it('fillUndefined(Array(3)), [undefined, undefined, undefined])', () => {
    checkEqual(true, deepEqual(fillUndefined(Array(3)), [undefined, undefined, undefined]))
  })
  it('fillUndefined([]), [undefined, undefined, undefined])', () => {
    const arr = []
    arr.length = 3
    checkEqual(true, deepEqual(fillUndefined(arr), [undefined, undefined, undefined]))
  })
})
