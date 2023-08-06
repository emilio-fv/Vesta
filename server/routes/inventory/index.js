// Imports
const express = require('express');
const { 
  handleCreateInventory,
  handleGetAllInventory,
  handleUpdateInventoryById,
  handleDeleteInventoryById
 } = require('../../controllers/inventory.controller');

//  Create router
const router = express.Router();

// Inventory API endpoints
router.post('/create', handleCreateInventory);
router.get('/all', handleGetAllInventory);
router.patch('/:id/update', handleUpdateInventoryById);
router.delete('/:id/delete', handleDeleteInventoryById);

// Exports
module.exports = {
  inventoryRouter: router
}