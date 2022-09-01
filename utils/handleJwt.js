const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET
const getProperties = require('../utils/handlePropertiesEngine');
const propertiesKey = getProperties();

/**
 * You must pass the user object
 * @param {*} user 
 */
const tokenSign = (user) => {
  const sign = jwt.sign(
    {
     [propertiesKey.id]: user[propertiesKey.id],
      role: user.role,
    },
    JWT_SECRET,
    {
      expiresIn: '2h',
    },
  );

  return sign
}
/**
 * Pass jwt session token
 * @param {*} tokenJwt 
 * @returns 
 */
const verifyToken = (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET)
  } catch (error) {
    return null
  }
}

module.exports = {
  tokenSign,
  verifyToken,
}