const casual = require('casual')
const uuid = require('uuid')

casual.define('project_question', () => ({
  id: uuid.v1(),
  question: casual.words(7) + '?'
}))

casual.define('project_questions', (amount) => {
  return new Array(amount).fill().map(() => casual.project_question)
})

module.exports = casual.project_questions(4)