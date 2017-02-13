const createNamespace = require('./create-namespace')
const mutationType = `
  type Mutation {
    createNamespace(name: String!, projectId: String!): Namespace!
  }
`

module.exports = {
  mutations: {
    createNamespace
  },
  mutationType
}