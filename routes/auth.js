const express = require('express')
const router = express.Router()
// const { matchedData } = require('express-validator')
// const { usersModel } = require('../models')
// const { compare, encrypt } = require('../utils/handlePassword')
const { validatorLogin, validatorRegister } = require('../validators/auth')
// const { tokenSign, verifyToken } = require('../utils/handleJwt')
const { registerController, loginController, fetchAllUsersController } = require('../controllers/auth')

/**
 * Register a user
 */
router.post('/register', validatorRegister, registerController)
router.post('/login', validatorLogin, loginController)
router.get('/usersList', fetchAllUsersController)

module.exports = router