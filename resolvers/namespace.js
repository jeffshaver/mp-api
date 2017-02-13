const namespacesData = require('../data/namespaces')
const getRecordById = require('../utilities/get-record-by-id')
const getUser = require('../utilities/get-user')
const makePromise = require('../utilities/make-promise')

const namespace = ({namespaceId}) => {
  const user = getUser()

  return makePromise(getRecordById(namespacesData[user.id], namespaceId))
}

module.exports = namespace