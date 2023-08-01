// Imports
const express = require('express');
const {
    handleCreateProduct,
    handleGetAllProducts,
    handleUpdateProductById,
    handleDeleteProductById
} = require('../../controllers/product.controller');

// Create router
const router = express.Router();

// Product API routes
router.post('/create', handleCreateProduct); 
router.get('/all', handleGetAllProducts); 
router.patch('/:id/update', handleUpdateProductById); 
router.delete('/:id/delete', handleDeleteProductById); 

// Exports
module.exports = {
    productRouter: router
}