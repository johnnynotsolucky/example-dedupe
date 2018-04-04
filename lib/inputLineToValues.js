const inputLineToValues = line$ =>
  line$
    .filter(line => line.length)
    .map(line => line.replace(/\"/g, '').split(','))

module.exports = inputLineToValues
