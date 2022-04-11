const express = require('express')
const { createItem } = require('../controllers/storage')
const { Router } = express
const uploadMiddleware = require('../utils/handleStorage')

const router = Router()

router.post('/', uploadMiddleware.single('myfile'), createItem)

module.exports = router