const { Router } = require('express')
const fs = require('fs')

const router = Router()

const PATH_ROUTES = __dirname;

const removeExtension = (fileName) => fileName.split('.').shift();

fs.readdirSync(PATH_ROUTES).forEach((file) => {
  const name = removeExtension(file)
  console.log('name', name)
  console.log('file', file)

  if (name !== 'index') {
    router.use(`/${name}`, require(`./${file}`))
  }
})

module.exports = router