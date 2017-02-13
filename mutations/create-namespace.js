const casual = require('casual')
const getUser = require('../utilities/get-user')
const namespacesData = require('../data/namespaces')

const createNamespace = ({name, projectId}) => {
  const namespace = casual.namespace(projectId, name)
  const user = getUser()

  namespacesData[user.id].push(namespace)

  return namespace
}

module.exports = createNamespace