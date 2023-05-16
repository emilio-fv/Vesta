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
router.post('/create', handleCreateProduct); // TODO test
router.get('/all', handleGetAllProducts); // TODO test
router.get('/all/:category', handleGetProductsByCategory); // TODO test
router.put('/:id', handleUpdateProductById); // TODO test
router.delete('/:id', handleDeleteProductById); // TODO test

// Exports
module.exports = {
    productRouter: router
}