const express = require('express')
const router = express.Router()
const { validatorLogin, validatorRegister } = require('../validators/auth')
const { registerController, loginController, fetchAllUsersController } = require('../controllers/auth')

/**
 * Register a user
 */
router.post('/register', validatorRegister, registerController)
router.post('/login', validatorLogin, loginController)
router.get('/usersList', fetchAllUsersController)

module.exports = router