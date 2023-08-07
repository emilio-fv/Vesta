// Imports
const express = require('express');
const { authenticate } = require('../../middleware/authenticate');
const { 
  handleCreateInventory,
  handleGetAllInventory,
  handleUpdateInventoryById,
  handleDeleteInventoryById
 } = require('../../controllers/inventory.controller');

// Create router
const router = express.Router();

// Inventory endpoints
router.post('/create', authenticate, handleCreateInventory);
router.get('/all', authenticate, handleGetAllInventory);
router.patch('/:id/update', authenticate, handleUpdateInventoryById);
router.delete('/:id/delete', authenticate, handleDeleteInventoryById);

// Exports
module.exports = {
  inventoryRouter: router
}