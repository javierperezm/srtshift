/** @format */

var assert = require('assert')
const { secondsToTextTime, textTimeToSeconds } = require('../lib/time')

describe('Time library', function () {
  describe('#textTimeToSeconds()', function () {
    const data = {
      '00:03:01,097': 181.097,
      '01:58:16,672': 7096.672,
    }

    it(`"00:03:01,097" should be converted to ${data['00:03:01,097']}`, () =>
      assert.equal(textTimeToSeconds('00:03:01,097'), data['00:03:01,097']))

    it(`"01:58:16,672" should be converted to ${data['01:58:16,672']}`, () =>
      assert.equal(textTimeToSeconds('01:58:16,672'), data['01:58:16,672']))
  })

  describe('#textTimeToSeconds() + #secondsToTextTime()', function () {
    it(`"00:03:01,097" should be converted to "00:03:01,097"`, () =>
      assert.equal(
        secondsToTextTime(textTimeToSeconds('00:03:01,097')),
        '00:03:01,097'
      ))

    it(`"01:58:16,672" should be converted to "01:58:16,672"`, () =>
      assert.equal(
        secondsToTextTime(textTimeToSeconds('01:58:16,672')),
        '01:58:16,672'
      ))
  })
})
