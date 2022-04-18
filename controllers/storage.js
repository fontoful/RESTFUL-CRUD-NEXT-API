const fs = require('fs')
const { matchedData } = require('express-validator');
const { storageModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

const PUBLIC_URL = process.env.PUBLIC_URL
const MEDIA_PATH = `${__dirname}/../storage`

/**
 * Get me all the stored items
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => { 
  try {
    const data = await storageModel.find({})
    res.send({ data })
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_STORAGES')
  }
}

/**
 * Get me a single item
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
  try {
    const { id } = matchedData(req)
    const data = await storageModel.findById(id)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, 'ERROR_GET_STORAGE')
  }
}

/**
 * Create an item
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
  try {
    const {  file } = req || {}
    const fileData = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    res.send({ data });
  } catch (error) {
    handleHttpError(res, 'ERROR_CREATING_STORAGE_ITEM')
  }
}

/**
 * Update an item
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {}

/**
 * Delete an item
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req) || {}
    const { filename } = await storageModel.findById(id)
    const filePath = `${MEDIA_PATH}/${filename}`

    // Do actual deletion (avoid shallow deletion here and use deleteOne)
    await storageModel.deleteOne({ _id: id })

    fs.unlinkSync(filePath)

    const resData = {
      filePath,
      deleted: 1,
    }
    
    res.send({ resData })
  } catch (error) {
    handleHttpError(res, 'ERROR_DELETING_STORAGE_ITEM')
  }
}

module.exports = {
  getItems,
  getItem,
  createItem,
  updateItem,
  deleteItem,
}