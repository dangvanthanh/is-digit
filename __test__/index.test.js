const isDigit = require('../')

test('Check something is digit', () => {
	expect(isDigit(1)).toBe(true)
	expect(isDigit(2)).toBe(true)
	expect(isDigit('9')).toBe(true)
	expect(isDigit(0)).toBe(true)
	expect(isDigit('8')).toBe(true)
})

test('Check something is non digit', () => {
	expect(isDigit(11)).toBe(false)
	expect(isDigit(20)).toBe(false)
	expect(isDigit('')).toBe(false)
	expect(isDigit(88)).toBe(false)
	expect(isDigit('Year ')).toBe(false)
})
