const namespacesData = require('../data/namespaces')
const getUser = require('../utilities/get-user')
const makePromise = require('../utilities/make-promise')

const namespaces = () => {
  const user = getUser()

  return makePromise(namespacesData[user.id])
}

module.exports = namespaces