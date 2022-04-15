const { Router } = require('express')
const { validatorCreateItem } = require('../validators/tracks')
const {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
} = require('../controllers/tracks');

const router = Router();

// TODO: http://localhost/api/tracks GET, POST, DELETE, PUT
router.get('/', getItems)
router.post('/', validatorCreateItem, createItem)

module.exports = router;