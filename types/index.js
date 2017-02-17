const Annotations = require('./annotations')
const Deployment = require('./deployment')
const Metadata = require('./metadata')
const Namespace = require('./namespace')
const Project = require('./project')
const ProjectQuestion = require('./project-question')
const Status = require('./status')
const User = require('./user')

module.exports = [
  Annotations,
  Deployment,
  Metadata,
  Namespace,
  Project,
  ProjectQuestion,
  Status,
  User
]