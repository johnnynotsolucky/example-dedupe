const dedupeCsvData = require('./lib/dedupeCsvData')
const observableFromFile = require('./lib/observableFromFile')

const args = process.argv.slice(2)
const [dedupeKey, filename] = args

if (!dedupeKey || !filename) {
  throw new Error('key and file are required')
}

const data$ = observableFromFile(filename)

dedupeCsvData(dedupeKey, data$)
  .subscribe({
    error: console.error,
    next: console.log,
    complete: () => console.log('Done.')
  })
