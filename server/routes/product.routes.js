// Import express, product controller methods
const express = require('express');
const {
    handleCreateProduct,
    handleGetAllProducts,
    handleGetProductsByCategory,
    handleUpdateProductById,
    handleDeleteProductById
} = require('../controllers/product.controller');

// Instantiate router
const router = express.Router();

// Product API Routes
router.post('/create', handleCreateProduct); 
router.get('/all', handleGetAllProducts); 
router.get('/:category/all', handleGetProductsByCategory);
router.put('/:id/update', handleUpdateProductById); 
router.delete('/:id', handleDeleteProductById); 

// Exports
module.exports = {
    productRouter: router
}