const Rx = require('rxjs/Rx')

const arrayToObject = ([headers, data]) =>
  headers.reduce((acc, header, i) => ({
    ...acc,
    [header]: data[i],
  }), {})

const inputValuesToObject = value$ =>
  Rx.Observable
    .combineLatest(
      value$.take(1), // Header row
      value$.skip(1), // Content rows
    )
    .map(arrayToObject)

module.exports = inputValuesToObject
