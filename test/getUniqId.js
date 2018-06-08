/* global describe, it */
'use strict'
const { getUniqId } = require('../')
const { checkType } = require('easily-expect')

describe('getUniqId test', () => {
  it('checkType('string', getUniqId(), getUniqId(2))', () => {
    checkType('string', getUniqId(), getUniqId(2))
  })
})
