const find = (collection, query) => {
  return new Promise((resolve, reject) => {
    collection.find(query, (error, result) => {
      if (error) {
        reject(error)

        return
      }

      resolve(result)
    })
  })
}

module.exports = find