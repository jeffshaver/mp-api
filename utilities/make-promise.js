const makePromise = (data, timeout = 500) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, timeout)
  })
}

module.exports = makePromise