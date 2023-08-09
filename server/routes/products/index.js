// Imports
const express = require('express');
const { authenticate } = require('../../middleware/authenticate');
const {
    handleCreateProduct,
    handleGetAllProducts,
    handleUpdateProductById,
    handleDeleteProductById
} = require('../../controllers/product');

// Create router
const router = express.Router();

// Product endpoints
router.post('/create', handleCreateProduct); 
router.get('/all', handleGetAllProducts); 
router.patch('/:id/update', handleUpdateProductById); 
router.delete('/:id/delete', handleDeleteProductById); 

// Exports
module.exports = {
    productsRouter: router
}