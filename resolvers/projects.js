const mongo = require('../utilities/mongo')
const find = require('../utilities/find-promise')

const collection = mongo.db().collection('projects')

const projects = () => {
  return find(collection, {})
}

module.exports = projects