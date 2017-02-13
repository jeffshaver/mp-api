const makePromise = require('../utilities/make-promise')
const projectQuestionsData = require('../data/project-questions')

const projectQuestions = () => {
  return makePromise(projectQuestionsData)
}

module.exports = projectQuestions