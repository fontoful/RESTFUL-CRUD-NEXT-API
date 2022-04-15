const { Router } = require('express')
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks')
const customHeader = require('../middleware/customHeader') 
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/tracks');

const router = Router();

// TODO: http://localhost/api/tracks GET, POST, DELETE, PUT
/**
 * Get all the items
 */
router.get('/', getItems)

/**
 * Get a single item
 */
router.get('/:id', validatorGetItem, getItem)

/**
 * Create one item
 */
router.post('/', validatorCreateItem, createItem)

module.exports = router;