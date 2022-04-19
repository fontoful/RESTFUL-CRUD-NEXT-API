const express = require('express')
const router = express.Router()
const { matchedData } = require('express-validator')
const { usersModel } = require('../models')
const { compare, encrypt } = require('../utils/handlePassword')
const { validatorLogin, validatorRegister } = require('../validators/auth')

/**
 * Register a user
 */
router.post('/register', validatorRegister, async (req, res) => {
  const data = matchedData(req)
  const hashedPwd = await encrypt(data.password)
  const body = { ...data, password: hashedPwd }
  const user = await usersModel.create(body)
  user.set("password", undefined, { strict: false })
  res.send({ user })
})

module.exports = router