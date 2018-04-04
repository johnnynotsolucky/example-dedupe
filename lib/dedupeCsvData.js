const { compose } = require('ramda')
const inputLineToValues = require('./inputLineToValues')
const inputValuesToObject = require('./inputValuesToObject')
const dedupeRecords = require('./dedupeRecords')

const dedupeCsvData = (key, data$) => {
  const f = compose(
    dedupeRecords(key),
    inputValuesToObject,
    inputLineToValues,
  )

  return f(data$)
}

module.exports = dedupeCsvData
