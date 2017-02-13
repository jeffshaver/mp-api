const deploymentsData = require('../data/deployments')
const getRecordsByKeyValue = require('../utilities/get-records-by-key-value')
const getUser = require('../utilities/get-user')
const makePromise = require('../utilities/make-promise')

const deploymentsByNamespace = ({namespaceId}) => {
  const user = getUser()

  return makePromise(getRecordsByKeyValue(deploymentsData[user.id], 'namespaceId', namespaceId))
}

module.exports = deploymentsByNamespace