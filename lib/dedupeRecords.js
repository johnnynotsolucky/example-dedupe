const Rx = require('rxjs/Rx')

const dedupeRecords = dedupeKey => (acc, o) => ({
  ...acc,
  ...(!acc[dedupeKey] ? { [o[dedupeKey]]: o } : null)
})

const objectToArray = o =>
  Rx.Observable.from(
    Object.keys(o)
      .reduce((acc, key) => [...acc, o[key]], [])
  )

module.exports = dedupeKey => object$ =>
  object$
    .reduce(dedupeRecords(dedupeKey), {})
    .map(objectToArray)
    .mergeAll()
