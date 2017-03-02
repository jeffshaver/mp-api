const MongoClient = require('mongodb').MongoClient
const MONGO_DATABASE = process.env.MONGO_DATABASE
const MONGO_HOST = process.env.MONGO_HOST
const MONGO_PASSWORD = process.env.MONGO_PASSWORD
const MONGO_USERNAME = process.env.MONGO_USERNAME
const uri = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}`
let _db

exports.connect = (done) => {
  if (_db) {
    return done()
  }

  MongoClient.connect(uri, (err, db) => {
    if (err) return done(err)

    _db = db
    done()
  })
}

exports.db = () => _db