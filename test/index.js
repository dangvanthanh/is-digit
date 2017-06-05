var test = require('tape')
var isDigit = require('../')

test('Check something is digit', function (t) {
  t.equal(true, isDigit(1))
  t.equal(true, isDigit(2))
  t.equal(true, isDigit('9'))
  t.equal(true, isDigit(0))
  t.equal(true, isDigit('8'))
  t.end()
})

test('Check something is non digit', function (t) {
  t.equal(false, isDigit(11))
  t.equal(false, isDigit(20))
  t.equal(false, isDigit(''))
  t.equal(false, isDigit(88))
  t.equal(false, isDigit('Year '))
  t.end()
})
