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
const authMiddleware = require('../middleware/session');
const checkRole = require('../middleware/role');

const router = Router();

// TODO: http://localhost/api/tracks GET, POST, DELETE, PUT

/**
 * Get all the items
 */
router.get('/', authMiddleware, getItems)

/**
 * Get a single item
 */
router.get('/:id', authMiddleware, validatorGetItem, getItem)

/**
 * Create one item
 */
router.post('/', authMiddleware, checkRole(['user']) ,validatorCreateItem, createItem)

/**
 * Update one item
 */
router.put('/:id', authMiddleware, validatorGetItem, validatorCreateItem, updateItem)

/**
 * Delete one item
 */
router.delete('/:id', authMiddleware, validatorGetItem, deleteItem)

module.exports = router;