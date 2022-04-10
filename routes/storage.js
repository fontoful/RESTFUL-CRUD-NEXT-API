const express = require('express')
const { Router } = express
const uploadMiddleware = require('../utils/handleStorage')

const router = Router()

router.post('/', uploadMiddleware.single('myfile'), (req, res) => {
  res.send({ a: 1 })
})

module.exports = router