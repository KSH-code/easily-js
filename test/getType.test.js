/* global describe, it */
'use strict'
const { getType } = require('../index')
const { checkEqual } = require('easily-expect')

describe('Test getType', () => {
  it('1. String', () => {
    checkEqual('string', getType(''))
  })
  it('2. Number', () => {
    checkEqual('number', getType(0))
  })
  it('3. Boolean', () => {
    checkEqual('boolean', getType(false))
  })
  it('4. Function', () => {
    checkEqual('function', getType(function () {}))
  })
  it('5. Object', () => {
    checkEqual('object', getType({}))
  })
  it('6. Array', () => {
    checkEqual('array', getType([]))
  })
  it('7. Undefined', () => {
    checkEqual('undefined', getType(undefined))
  })
  it('8. Null', () => {
    checkEqual('null', getType(null))
  })
})
