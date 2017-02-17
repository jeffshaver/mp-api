const makePromise = (data, timeout = 250) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data)
    }, timeout)
  })
}

module.exports = makePromise