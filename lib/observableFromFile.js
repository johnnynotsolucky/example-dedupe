const fs = require('fs')
const Rx = require('rxjs/Rx')

const observableFromFile = filename =>
  Rx.Observable.create((observer) => {
    if (!filename) {
      return observer.error('filename is required')
    }

    fs.readFile(filename, (err, data) => {
      if (err) {
        return observer.error(err)
      }

      const lines = data.toString().split(/\n/)
      lines.forEach((line, i) => {
        observer.next(line)
        if (i === lines.length - 1) {
          observer.complete()
        }
      })
    })
  })

module.exports = observableFromFile
