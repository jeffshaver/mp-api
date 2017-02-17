const namespacesData = require('../data/namespaces')
const getUser = require('../utilities/get-user')
const makePromise = require('../utilities/make-promise')
const kubeApi = require('../utilities/k8s')

const namespaces = () => {
  const user = getUser()

  return kubeApi.get('namespaces')
    .then((data) => {
      return data.items
    })
}

module.exports = namespaces