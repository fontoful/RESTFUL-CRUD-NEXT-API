const { handleHttpError } = require("../utils/handleError")

const checkRole = (roles) => (req, res, next) => {
  try {
    const { user: { role: userRoles } } = req || {}
    
    /**
     * I'm following a course here but I strongly believe it should be a .every here rather than .some
     */
    const checkRoleValues = roles.some((middlewareRole) => userRoles.includes(middlewareRole))

    if (!checkRoleValues) {
      handleHttpError(res, 'USER_MISSING_PERMISSIONS', 403)
      return
    }

    // if we got this far, we can invoke next()
    next()
  } catch (error) {
    handleHttpError(res, 'ERROR_PERMISSIONS', 403)
  }
}

module.exports = checkRole