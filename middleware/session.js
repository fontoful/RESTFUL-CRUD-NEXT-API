const { handleHttpError } = require('../utils/handleError')
const { usersModel } = require('../models')
const { verifyToken } = require('../utils/handleJwt')

const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers || {}
    const [_, auth] = authorization.split(' ');

    if (!authorization) {
      handleHttpError(res, 'NO_TOKEN', 401)
      return
    }

    const dataToken = verifyToken(auth)

    // if a message exists, it means it threw an error
    if (dataToken?.message) {
      handleHttpError(res, dataToken.message, 401)
      return
    }

    const query = {
      id: dataToken.id
    }

    // use findOne method as both Mongoose and Sequelize (ORMS) have that method
    const user = await usersModel.findOne(query)
    req.user = user
    // inject a user property to the req object if we got this far
    next()

  } catch (e) {
    handleHttpError(res, 'NOT_SESSION', 401)
  }
}

module.exports = authMiddleware