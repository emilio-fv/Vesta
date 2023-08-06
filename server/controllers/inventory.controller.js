// Imports
const { 
  createInventory,
  getAllInventory,
  updateInventoryById,
  deleteInventoryById
} = require('../services/inventory.service');
const { logger } = require('../utils/logger.utils');

const handleCreateInventory = async (req, res) => {
  logger.info("Controller: handleCreateInventory")
  try {
    const newInventory = await createInventory(req.body);
    console.log(newInventory);
    return res.status(200).json(newInventory);
  } catch (error) {
    logger.error(error);
    return res.status(400).json(error);
  }
};

const handleGetAllInventory = async (req, res) => {
  logger.info('Controller: handleGetAllInventory')
  try {
    const allInventory = await getAllInventory();
    return res.status(200).json(allInventory);
  } catch (error) {
    logger.error(error);
    return res.status(400).json(error);
  }
};

const handleUpdateInventoryById = async (req, res) => {
  logger.info('Controller: handleUpdateInventoryById')
  try {
    const updatedInventory = await updateInventoryById(req.body, req.params.id);
    return res.status(200).json(updatedInventory);
  } catch (error) {
    logger.error(error);
    return res.status(400).json(error);
  }
};

const handleDeleteInventoryById = async (req, res) => {
  logger.info('Controller: handleDeleteInventoryById');
  try {
    const response = await deleteInventoryById(req.params.id);

    if (response) {
      return res.status(200).json({
        inventoryId: req.params.id,
        message: 'Inventory item deleted.'
      })
    }
  } catch (error) {
    logger.error(error);
    return res.status(400).json(error);
  }
};

// Exports
module.exports = {
  handleCreateInventory,
  handleGetAllInventory,
  handleUpdateInventoryById,
  handleDeleteInventoryById
}