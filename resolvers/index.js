const deployment = require('./deployment')
const deployments = require('./deployments')
const deploymentsByNamespace = require('./deployments-by-namespace')
const namespace = require('./namespace')
const namespaces = require('./namespaces')
const namespacesByProject = require('./namespaces-by-project')
const project = require('./project')
const projects = require('./projects')
const projectQuestions = require('./project-questions')
const user = require('./user')
const queryType = `
  type Query {
    deployment(deploymentId: String): Deployment
    deployments: [Deployment]!
    deploymentsByNamespace(namespaceId: String): [Deployment]!
    namespace(namespaceId: String): Namespace!
    namespaces: [Namespace]!
    namespacesByProject(projectId: String): [Namespace]!
    project(projectId: String): Project!
    projects: [Project]!
    projectQuestions: [ProjectQuestion]!
    user: User!
  }
`

module.exports = {
  queryType,
  resolvers: {
    deployment,
    deployments,
    deploymentsByNamespace,
    namespace,
    namespaces,
    namespacesByProject,
    project,
    projects,
    projectQuestions,
    user
  }
}