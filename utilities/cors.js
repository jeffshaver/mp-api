const cors = require('cors')
const whitelist = [
  'http://localhost:3000',
  'https://8080-dot-2211006-dot-devshell.appspot.com',
  'https://3000-dot-2211006-dot-devshell.appspot.com'
]
const corsOptions = {
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  origin: (origin, callback) => {
    const originIsWhitelisted = whitelist.indexOf(origin) !== -1

    callback(null, originIsWhitelisted)
  }
}

module.exports = cors(corsOptions)