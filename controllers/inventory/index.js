// Imports
const { 
  createInventory,
  getAllInventory,
  getInventoryByProduct,
  getInventoryByProductId,
  getInventoryByCategory,
  updateInventoryById,
  deleteInventoryById,
} = require('../../services/inventory');
const { logger } = require('../../utils/logger.utils');

const handleCreateInventory = async (req, res) => {
  logger.info("Controller: handleCreateInventory");
  try {
    const newInventory = await createInventory(req.body);
    return res.status(200).json(newInventory);
  } catch (error) {
    logger.error(error);
    return res.status(400).json(error);
  }
};

const handleGetAllInventoryAdmin = async (req, res) => {
  logger.info('Controller: handleGetAllInventoryAdmin');
  try {
    const allInventory = await getAllInventory();
    return res.status(200).json(allInventory);
  } catch (error) {
    logger.error(error);
    return res.status(400).json(error);
  }
};

const handleGetAllInventory = async (req, res) => {
  logger.info('Controller: handleGetAllInventory');
  try {
    const allInventory = await getInventoryByProduct();
    return res.status(200).json(allInventory);
  } catch (error) {
    logger.error(error);
    return res.status(400).json(error);
  }
};

const handleGetAllInventoryByCategory = async (req, res) => {
  logger.info('Controller: handleGetAllInventoryByCategory');
  try {
    const category = req.params.category.charAt(0).toUpperCase() + req.params.category.slice(1);
    console.log(category);
    const allInventory = await getInventoryByCategory(category);
    return res.status(200).json(allInventory);
  } catch (error) {
    logger.error(error);
    return res.status(400).json(error);
  }
};

const handleGetInventoryByProductId = async (req, res) => {
  logger.info('Controller: handleGetInventoryByProductId');
  try {
    const response = await getInventoryByProductId(req.params.id);
    return res.status(200).json(response);
  } catch (error) {
    logger.error(error);
    return res.status(400).json(error);
  }
};

const handleUpdateInventoryById = async (req, res) => {
  logger.info('Controller: handleUpdateInventoryById');
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
  handleGetAllInventoryAdmin,
  handleGetAllInventory,
  handleGetAllInventoryByCategory,
  handleGetInventoryByProductId,
  handleUpdateInventoryById,
  handleDeleteInventoryById,
};