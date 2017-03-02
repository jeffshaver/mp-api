const k8s = require('../utilities/k8s')

const namespaces = () => {
  return k8s.get('namespaces')
    .then((data) => {
      return data.items
    })
}

module.exports = namespaces