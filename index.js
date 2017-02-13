// types
const types = require('./types')
// resolvers
const resolvers = require('./resolvers')
// mutations
const mutations = require('./mutations')
// express
const bodyParser = require('body-parser')
const {buildSchema} = require('graphql')
const compression = require('compression')
const cors = require('./utilities/cors')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const morgan = require('morgan')
const path = require('path')
const serveStatic = require('serve-static')

const port = process.env.PORT || 4000

const schema = buildSchema(`
  ${types.join('')}
  ${resolvers.queryType}
  ${mutations.mutationType}
`)

// The root provides a resolver function for each API endpoint
const root = Object.assign({},
  resolvers.resolvers,
  mutations.mutations
)

const app = express()

app.use(compression())
app.use(morgan('dev'))
app.use(cors)

app.use('/', bodyParser.json())
app.use('/', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.listen(port)

/* eslint-disable no-console */
console.log(`Running a GraphQL API server at localhost:${port}`)
/* eslint-enable no-console */