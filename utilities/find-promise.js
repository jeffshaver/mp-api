const find = (collection, query) => {
  return new Promise((resolve, reject) => {
    collection.find(query).toArray((error, result) => {
      if (error) {
        reject(error)

        return
      }

      resolve(result)
    })
  })
}

module.exports = find