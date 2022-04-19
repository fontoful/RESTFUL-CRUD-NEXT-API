const bcryptjs = require('bcryptjs')

/**
 * 
 * Unencrpypted pwd: eg. hola.01
 * @param {*} plainPassword 
 * @returns 
 */
const encrypt = async (plainPassword) => {
  const hash = await bcryptjs.hash(plainPassword, 10)

  return hash
}

const compare = async (plainPassword, hashPwd) => {
   return await bcryptjs.compare(plainPassword, hashPwd)
}

module.exports = {
  encrypt,
  compare,
}