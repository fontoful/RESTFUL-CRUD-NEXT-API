const { matchedData } = require('express-validator')
const { tracksModel } = require('../models')
const { handleHttpError } = require('../utils/handleError')

/**
 * Get me all the stored items
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => { 
  try {
    const data = await tracksModel.find({})
    res.send({ data, user: req.user })
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEMS')
  }
}

/**
 * Get me a single item
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
  try {
    const cleanRequest = matchedData(req)
    const { id } = cleanRequest;
    const data = await tracksModel.findById(id)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_ITEM')
  }
}

/**
 * Create an item
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
  try {
    const body = matchedData(req)
    const data = await tracksModel.create(body)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATE_ITEMS')
  }
}

/**
 * Update an item
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
  try {
    const { id, ...body  } = matchedData(req)
    const data = await tracksModel.findOneAndUpdate(id, body, { new: true })
    res.send({ data })
  } catch (error) {
    handleHttpError(res, 'ERROR_UPDATE_ITEMS')
  }
}


/**
 * Delete an item
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req)
    // const data = await tracksModel.findOneAndUpdate(id, body)
    const data = await tracksModel.delete({ _id: id })
    res.send({ data })
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETING_ITEM')
  }
}

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
}