const getUser = require('../utilities/get-user')
const makePromise = require('../utilities/make-promise')

const user = () => {
  const user = getUser()

  return makePromise(user)
}

module.exports = user