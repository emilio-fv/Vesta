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
router.post('/create', authenticate, handleCreateProduct); 
router.get('/all', authenticate, handleGetAllProducts); 
router.patch('/:id/update', authenticate, handleUpdateProductById); 
router.delete('/:id/delete', authenticate, handleDeleteProductById); 

// Exports
module.exports = {
    productsRouter: router
}