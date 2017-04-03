const numberadder = require('./numberadder')

module.exports = str => {
  return str.split("+")
    .map(Number)
    .concat(numberadder())
    .filter(x => x === x)
    .reduce((a, b) => a + b, 0)
}
