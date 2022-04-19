const { matchedData } = require("express-validator")
const { usersModel } = require("../models")
const { tokenSign } = require("../utils/handleJwt")
const { encrypt } = require("../utils/handlePassword")

const registerController = async (req, res) => {
  const data = matchedData(req)
  const hashedPwd = await encrypt(data.password)
  const body = { ...data, password: hashedPwd }
  const user = await usersModel.create(body)
  user.set("password", undefined, { strict: false })

  res.send({ user, token: tokenSign(user) })

}

module.exports = {
  registerController,
}
