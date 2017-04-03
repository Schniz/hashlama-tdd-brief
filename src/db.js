const db = {
  soldiers: [{name: 'gal'}]
}

exports.getSoldiers = (callback) => {
  callback(null, db.soldiers)
} // [{ name: 'gal' }]
