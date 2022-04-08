const { Router } = require('express')
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
router.post('/', createItem)

module.exports = router;