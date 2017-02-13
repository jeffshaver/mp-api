const projectsData = require('../data/projects')
const getRecordById = require('../utilities/get-record-by-id')
const getUser = require('../utilities/get-user')
const makePromise = require('../utilities/make-promise')

const project = ({projectId}) => {
  const user = getUser()

  return makePromise(getRecordById(projectsData[user.id], projectId))
}

module.exports = project