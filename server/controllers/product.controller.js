// Imports
const {
    createProduct,
    getAllProducts,
    updateProductById,
    deleteProductById
} = require('../services/product.service');
const { logger } = require('../utils/logger.utils');

// Create Product
const handleCreateProduct = async (req, res) => {
    logger.info("Controller: handleCreateProduct");

    try {
        // Add product to database
        const newProduct = await createProduct(req.body);

        // Return new product
        return res.status(200).json({
            ...newProduct.dataValues
        })
    } catch (error) {
        logger.error(error);
        return res.status(400).json(error)
    }
}

// Get All Products
const handleGetAllProducts = async (req, res) => {
    logger.info("Controller: handleGetAllProducts");
    // Query database
    const response = await getAllProducts();

    // Return products
    return res.json(response);
}

// Update Product By Id
const handleUpdateProductById = async (req, res) => {
    logger.info("Controller: handleUpdateProductById");
    try {
        // Query database
        const updatedProduct = await updateProductById(req.body, req.params.id);
        
        // Return updated product
        return res.status(200).json({
            updatedProduct: updatedProduct
        });
    } catch (error) {
        logger.error(error);
        return res.status(400).json(error);
    }
}

// Delete Product By Id
const handleDeleteProductById = async (req, res) => {
    // TODO: log controller method
    logger.info("Controller: handleDeleteProductById");
    // Destructure request body
    const { id } = req.params;

    try {        
        // Query database
        const response = await deleteProductById(id);

        // Return success message
        return res.status(200).json("Product deleted.");
    } catch (error) {
        logger.error(error);
        return res.status(400).json(error);
    }
}

// Exports
module.exports = {
    handleCreateProduct,
    handleGetAllProducts,
    handleUpdateProductById,
    handleDeleteProductById
};