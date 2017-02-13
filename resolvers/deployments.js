const deploymentsData = require('../data/deployments')
const getUser = require('../utilities/get-user')
const makePromise = require('../utilities/make-promise')

const deployments = () => {
  const user = getUser()

  return makePromise(deploymentsData[user.id])
}

module.exports = deployments