const calc = require('./calculateString')

it('returns the number if only a number is passed', () => {
  expect(calc("1")).toBe(1)
})

it('calculate a simple addition', () => {
  expect(calc("1 + 1")).toBe(2)
})

it('calculates an addition with a minus in it', () => {
  expect(calc("1 - 1")).toBe(0)
  expect(calc("-1 - 1")).toBe(-2)
})
