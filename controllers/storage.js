const { storageModel } = require('../models');
const PUBLIC_URL = process.env.PUBLIC_URL

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
  const {  file } = req || {}
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`
  }
  const data = await storageModel.create(fileData)
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