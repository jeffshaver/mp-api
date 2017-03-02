// load environment variables
require('dotenv').config({silent: true})
// mongo
const mongo = require('./utilities/mongo')
// types
const types = require('./types')
// express
const bodyParser = require('body-parser')
const {buildSchema} = require('graphql')
const compression = require('compression')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const morgan = require('morgan')

const port = process.env.PORT || 4000

const app = express()

app.use(compression())
app.use(morgan('dev'))

if (process.env.CORS_WHITELIST) {
  const cors = require('./utilities/cors')

  app.use(cors)
}

app.use('/', bodyParser.json())

app.listen(port)

/* eslint-disable no-console */
console.log(`Running a GraphQL API server at localhost:${port}`)
/* eslint-enable no-console */

mongo.connect(() => {
  // resolvers
  const resolvers = require('./resolvers')
  // mutations
  const mutations = require('./mutations')
  // build schema
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

  app.use('/', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  }))
})