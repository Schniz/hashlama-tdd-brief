const controller = require('./controller')

jest.mock('./db', () => {
  return {
    getSoldiers: (callback) => {
      callback(null, [])
    }
  }
})

it('works', () => {
  controller(result => {
    console.log(result)
  })
})
