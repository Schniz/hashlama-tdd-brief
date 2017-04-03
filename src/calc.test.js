const calc = require('./calc')

jest.mock('./numberadder', () =>
  () => 0
)

it('returns the number if it is only one number', () => {
  const result = calc("1")
  expect(result).toBe(1)
})

it('adds numbers', () => {
  const result = calc("1 + 1")
  expect(result).toBe(2)
})

it('ignores non-numeric characters', () => {
  ["a", " ", "_!@$!"].forEach(x => {
    const result = calc(x)
    expect(result).toBe(0)
  })
})
