const { check } = require('express-validator')
const validateResults = require('../utils/handleValidator')

// TODO create a utility function to handle this creation of the validation to avoid repeating
// exists().notEmpty()

const validatorCreateItem = [
  check('name').exists().notEmpty(),
  check('album').exists().notEmpty(),
  check('cover').exists().notEmpty(),
  check('artist_name').exists().notEmpty(),
  check('artist_nickname').exists().notEmpty(),
  check('artist_nationality').exists().notEmpty(),
  check('duration_start').exists().notEmpty(),
  check('duration_end').exists().notEmpty(),
  check('mediaId').exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next)
]

const validatorGetItem = [
  check('id').exists().notEmpty(),
  (req, res, next) => validateResults(req, res, next)
]

module.exports = { validatorCreateItem, validatorGetItem }