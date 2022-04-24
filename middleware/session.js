const { handleHttpError } = require('../utils/handleError')
const { usersModel } = require('../models')
const { verifyToken } = require('../utils/handleJwt')

const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers || {}

    if (!authorization) {
      handleHttpError(res, 'NO_TOKEN', 401)
      return
    }

    const dataToken = verifyToken(authorization)

    if (!dataToken._id) {
      handleHttpError(res, 'ERROR_ID_TOKEN', 401)
      return
    }

    const user = await usersModel.findById(dataToken._id)
    req.user = user
    // inject a user property to the req object if we got this far
    next()

  } catch (e) {
    handleHttpError(res, 'NOT_SESSION', 401)
  }
}

module.exports = authMiddleware