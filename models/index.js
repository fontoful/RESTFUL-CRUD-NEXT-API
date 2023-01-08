const usersModel = require('./mysql/users')
const tracksModel = require('./mysql/tracks')
const storageModel = require('./mysql/storage')

const models = {
  usersModel,
  tracksModel,
  storageModel,
}

module.exports = models;