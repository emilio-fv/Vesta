// Imports
const { 
  createInventory,
  getAllInventory,
  updateInventoryById,
  deleteInventoryById,
  getInventoryByCategory
} = require('../../services/inventory');
const { logger } = require('../../utils/logger.utils');

const handleCreateInventory = async (req, res) => {
  logger.info("Controller: handleCreateInventory");
  try {
    const { size, color, quantity, onSale, discount, featured, productId } = req.body;
    const data = {
      size: size,
      color: color,
      quantity: quantity,
      onSale: onSale,
      discount: discount,
      featured: featured
    };

    const newInventory = await createInventory(data, productId);

    return res.status(200).json(newInventory);
  } catch (error) {
    logger.error(error);
    return res.status(400).json(error);
  }
};

const handleGetAllInventory = async (req, res) => {
  logger.info('Controller: handleGetAllInventory');
  try {
    const allInventory = await getAllInventory();
    return res.status(200).json(allInventory);
  } catch (error) {
    logger.error(error);
    return res.status(400).json(error);
  }
};

const handleGetInventoryByCategory = async (req, res) => {
  logger.info('Controller: handleGetInventoryByCategory');
  try {
    const category = req.params.category.charAt(0).toUpperCase() + req.params.category.slice(1);
    const response = await getInventoryByCategory(category);

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
  handleGetAllInventory,
  handleGetInventoryByCategory,
  handleUpdateInventoryById,
  handleDeleteInventoryById
};