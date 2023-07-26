// Imports
const express = require('express');
const { authenticate } = require('../middleware/authenticate');
const {
    handleCreateProduct,
    handleGetAllProducts,
    handleGetProductsByCategory,
    handleUpdateProductById,
    handleDeleteProductById
} = require('../controllers/product.controller');

// Create router
const router = express.Router();

// Product API routes
router.post('/create', authenticate, handleCreateProduct); 
router.get('/all', authenticate, handleGetAllProducts); 
router.get('/:category/all', authenticate, handleGetProductsByCategory);
router.put('/:id/update', authenticate, handleUpdateProductById); 
router.delete('/:id', authenticate, handleDeleteProductById); 

// Exports
module.exports = {
    productRouter: router
}