const { tracksModel } = require('../models')

/**
 * Get me all the stored items
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => { 
  const data = await tracksModel.find({})

  res.send({ data })
}

/**
 * Get me a single item
 * @param {*} req 
 * @param {*} res 
 */
const getItem = (req, res) => {}

/**
 * Create an item
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
  const { body } = req || {}
  const data = tracksModel.create(body)

  res.send({ data });
}

/**
 * Update an item
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = (req, res) => {}

/**
 * Delete an item
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = (req, res) => {}

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
}