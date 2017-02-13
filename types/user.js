const User = `
  type User {
    authenticated: Boolean
    id: String
    projects: [Project]
    username: String
  }
`

module.exports = User