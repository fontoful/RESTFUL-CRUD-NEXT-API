const { handleHttpError } = require('../utils/handleError')
const { usersModel } = require('../models')
const { verifyToken } = require('../utils/handleJwt')
const getProperties = require('../utils/handlePropertiesEngine');
const propertiesKey = getProperties();

const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers || {}
    const [_, auth] = authorization.split(' ');
    debugger;

    if (!authorization) {
      handleHttpError(res, 'NO_TOKEN', 401)
      return
    }

    const dataToken = verifyToken(auth)

    if (!dataToken) {
      handleHttpError(res, 'TOKEN_EXPIRED', 401)
      return
    }

    const query = {
      [propertiesKey.id]: dataToken[propertiesKey.id]
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