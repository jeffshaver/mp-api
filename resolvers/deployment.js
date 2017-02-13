const deploymentsData = require('../data/deployments')
const getRecordById = require('../utilities/get-record-by-id')
const getUser = require('../utilities/get-user')
const makePromise = require('../utilities/make-promise')

const deployment = ({deploymentId}) => {
  const user = getUser()

  return makePromise(getRecordById(deploymentsData[user.id], deploymentId))
}

module.exports = deployment