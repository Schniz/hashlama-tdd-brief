const express = require('express')
const app = express()
const Sum = require('./sum')

const parseToNumber = ns => {
  const num = parseFloat(ns, 10)
  return num !== num ? Sum(0) : Sum(num)
}

app.use(express.static(__dirname + '/../public'))

app.get('/calc', (req, res) => res.send(`
  <!DOCTYPE html>
  <form action="/calculate">
    <input
      type="text"
      placeholder="numbers"
      name="numbers"
    />
    <input type="submit" />
  </form>
`))

const concat = (a, b) => a.concat(b)

app.get('/calculate', (req, res) => {
  const result = req.query.numbers
    .split(",")
    .map(e => e.trim())
    .map(parseToNumber)
    .reduce(concat, Sum.zero())
    .fold(e => e)
  res.send(`Result: ${result}`)
})

app.listen(9001)
