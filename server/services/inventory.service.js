// Imports
const { models: { Inventory } } = require('../models/index');
const { logger } = require('../utils/logger.utils');

const createInventory = async (data) => {
  logger.info('Service: createInventory')
  const newInventory = await Inventory.create(data);
  return newInventory;
};

const getAllInventory = async () => {
  logger.info('Service: getAllInventory')
  const allInventory = await Inventory.findAll();
  return allInventory;
}

// Exports
module.exports = {
  createInventory,
  getAllInventory
}