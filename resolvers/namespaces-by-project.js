const namespacesData = require('../data/namespaces')
const getRecordsByKeyValue = require('../utilities/get-records-by-key-value')
const getUser = require('../utilities/get-user')
const makePromise = require('../utilities/make-promise')

const namespacesByProject = ({projectId}) => {
  const user = getUser()

  return makePromise(getRecordsByKeyValue(namespacesData[user.id], 'projectId', projectId))
}

module.exports = namespacesByProject