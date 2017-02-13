const getRecordById = (records, id) => {
  return records.find((record) => record.id === id)
}

module.exports = getRecordById