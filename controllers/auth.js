const { matchedData } = require("express-validator")
const { usersModel } = require("../models")
const { tokenSign } = require("../utils/handleJwt")
const { encrypt, compare } = require("../utils/handlePassword")
const { handleHttpError } = require('../utils/handleError')

const registerController = async (req, res) => {
  try {
    const data = matchedData(req)
    const hashedPwd = await encrypt(data.password)
    const body = { ...data, password: hashedPwd }
    const user = await usersModel.create(body)
    user.set("password", undefined, { strict: false })

    res.send({ user, token: tokenSign(user) })
  } catch (error) {
    handleHttpError(res, 'ERROR_REGISTER_USER')
  }

}

const loginController = async (req, res) => {
  try {
    const data = matchedData(req)
    const user = await usersModel.findOne({ email: data.email }).select('password name role email')
    
    if (!user) {
      handleHttpError(res, "USER_DOESNT_EXIST", 404)
    }

    const hashedPwd = user.password
    const isCorrectPwd = await compare(data.password, hashedPwd)

    if (!isCorrectPwd) {
      handleHttpError(res, "INVALID_PASSWORD", 402)
    }

    user.set('password', undefined, { strict: false })

    res.send({
      token: tokenSign(user),
      user
    })
  } catch (error) {
    handleHttpError(res, 'ERROR_LOGIN_USER')
  }
}

const fetchAllUsersController = async (req, res) => {
  try {
    const users = await usersModel.find({})
    res.send({ users })
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEMS')
  }
}

module.exports = {
  fetchAllUsersController,
  loginController,
  registerController,
}
