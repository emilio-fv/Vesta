// Imports
const express = require('express');
const { authenticate } = require('../../middleware/authenticate');
const { 
  handleCreateInventory,
  handleGetAllInventory,
  handleUpdateInventoryById,
  handleDeleteInventoryById,
  handleGetInventoryByCategory,
  handleGetInventoryById,
  handleGetInventoryByProductId
 } = require('../../controllers/inventory');

// Create router
const router = express.Router();

// Inventory endpoints
router.post('/create', handleCreateInventory);
router.get('/all', handleGetAllInventory);
router.get('/:id/inventory', handleGetInventoryById);
router.get('/:id/item', handleGetInventoryByProductId);
router.get('/:category/all', handleGetInventoryByCategory);
router.patch('/:id/update', handleUpdateInventoryById);
router.delete('/:id/delete', handleDeleteInventoryById);

// Exports
module.exports = {
  inventoryRouter: router
};