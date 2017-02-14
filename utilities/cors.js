const cors = require('cors')
const whitelist = (process.env.CORS_WHITELIST || '').split(',')
const corsOptions = {
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  origin: (origin, callback) => {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1

    callback(null, originIsWhitelisted)
  }
}

module.exports = cors(corsOptions)