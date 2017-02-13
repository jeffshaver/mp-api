const getRecordsByKeyValue = (records, key, value) => {
  return records.filter(({[key]: recordValue}) => recordValue === value)
}

module.exports = getRecordsByKeyValue