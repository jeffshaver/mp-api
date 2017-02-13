const casual = require('casual')
const uuid = require('uuid')
const namespaces = require('./namespaces')[0]

casual.define('deployment', (namespaceId) => ({
  id: uuid.v1(),
  name: casual.word,
  namespaceId,
  status: casual.random_element(['valid', 'invalid', 'unknown'])
}))

casual.define('deployments', (namespaces, amount) => {
  const result = []

  namespaces.forEach((namespace) => {
    result.push(...new Array(amount).fill().map(() => casual.deployment(namespace.id)))
  })

  return result
})

module.exports = {
  0: casual.deployments(namespaces, 2)
}