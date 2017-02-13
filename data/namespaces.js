const casual = require('casual')
const uuid = require('uuid')
const projects = require('./projects')[0]

casual.define('namespace', (projectId, name) => ({
  id: uuid.v1(),
  name: name || casual.word,
  projectId,
  status: casual.random_element(['valid', 'invalid', 'unknown'])
}))

casual.define('namespaces', (projects, amount) => {
  const result = []

  projects.forEach((project) => {
    result.push(...new Array(amount).fill().map(() => casual.namespace(project.id)))
  })

  return result
})

module.exports = {
  0: casual.namespaces(projects, 4)
}