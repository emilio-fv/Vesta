// Imports
const express = require('express');
const { 
  handleCreateInventory,
  handleGetAllInventory
 } = require('../../controllers/inventory.controller');

//  Create router
const router = express.Router();

// Inventory API endpoints
router.post('/create', handleCreateInventory);
router.get('/all', handleGetAllInventory);

// Exports
module.exports = {
  inventoryRouter: router
}