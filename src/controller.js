const db = require('./db')

module.exports = (callback) => {
  db.getSoldiers((err, soldiers) => {
    callback({
      soldiers: soldiers,
      gal: 'hagever'
    })
  })
}
