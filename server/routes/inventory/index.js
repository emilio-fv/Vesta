// Imports
const express = require('express');
const { authenticate } = require('../../middleware/authenticate');
const { 
  handleCreateInventory,
  handleGetAllInventoryAdmin,
  handleGetAllInventory,
  handleGetAllInventoryByCategory,
  handleGetInventoryByProductId,
  handleUpdateInventoryById,
  handleDeleteInventoryById,
 } = require('../../controllers/inventory');

// Create router
const router = express.Router();

// Inventory endpoints
router.post('/create', handleCreateInventory);
router.get('/admin', handleGetAllInventoryAdmin);
router.get('/', handleGetAllInventory);
router.get('/:category/all', handleGetAllInventoryByCategory);
router.get('/:id/inventory', handleGetInventoryByProductId);
router.patch('/:id/update', handleUpdateInventoryById);
router.delete('/:id/delete', handleDeleteInventoryById);

// Exports
module.exports = {
  inventoryRouter: router
};