const projectsData = require('../data/projects')
const getUser = require('../utilities/get-user')
const makePromise = require('../utilities/make-promise')

const projects = () => {
  const user = getUser()

  return makePromise(projectsData[user.id])
}

module.exports = projects