'use strict'

const invert = require('./invert-buffer')

module.exports = async (buffer) => {
  const str = invert(buffer).toString()
  return JSON.parse(str)
}
