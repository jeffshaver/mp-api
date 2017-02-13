const casual = require('casual')
const uuid = require('uuid')

casual.define('project', () => ({
  id: uuid.v1(),
  name: casual.word,
  status: casual.random_element(['approved', 'pending', 'rejected'])
}))

casual.define('projects', (amount) => {
  return new Array(amount).fill().map(() => casual.project)
})

module.exports = {
  0: casual.projects(7)
}