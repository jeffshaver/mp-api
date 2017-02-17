const casual = require('casual')
const getUser = require('../utilities/get-user')
const namespacesData = require('../data/namespaces')
const kubeApi = require('../utilities/k8s')

const createNamespace = ({name, projectId}) => {
  const {username} = getUser()

  console.log('createNS', name, projectId)

  return kubeApi.post('namespaces', {
    apiVersion: 'v1',
    kind: 'Namespace',
    metadata: {
      annotations: {
        projectId: projectId,
        'openshift.io/requester': username
      },
      name
    },
    spec: {
      finalizers: [
        'openshift.io/origin',
        'kubernetes'
      ]
    }
  })
}

module.exports = createNamespace