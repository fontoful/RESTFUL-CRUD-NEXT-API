const express = require('express')
const { createItem, getItem, getItems, deleteItem } = require('../controllers/storage');
const { validatorGetItem } = require('../validators/storage')
const { Router } = express
const uploadMiddleware = require('../utils/handleStorage')

const router = Router()

/**
 * Get all storage items
 */
router.get('/', getItems)

/**
 * Get a single storage item
 */
router.get('/:id', validatorGetItem, getItem)

/**
 * Delete a single storage item
 */
router.delete('/:id', validatorGetItem, deleteItem)

/**
 * Create a single storage item
 */
router.post('/', uploadMiddleware.single('myfile'), createItem)

module.exports = router