const Sum = x => ({
  x,
  concat: sum => Sum(x + sum.x),
  fold: fn => fn(x),
  inspect: () => `Sum(${x})`,
})

Sum.zero = () => Sum(0)

module.exports = Sum
