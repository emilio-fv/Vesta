// Imports
const {
    createProduct,
    getAllProducts,
    updateProductById,
    deleteProductById
} = require('../services/product.service');
const {
    getInventoryByProductId
} = require('../services/inventory.service');
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
        });
    } catch (error) {
        logger.error(error);
        return res.status(400).json(error)
    }
};

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
        return res.status(200).json(updatedProduct[1][0]);
    } catch (error) {
        logger.error(error);
        return res.status(400).json(error);
    }
}

// Delete Product By Id
const handleDeleteProductById = async (req, res) => {
    logger.info("Controller: handleDeleteProductById");
    try {
        // Check if any inventory
        const currentInventory = await getInventoryByProductId(req.params.id);
        
        if (currentInventory.length > 0) {
            return res.status(400).json({ message: 'Unable to delete product with current inventory.' });
        };

        // Query database
        const response = await deleteProductById(req.params.id);
        
        if (response) {
            // Return success message
            return res.status(200).json({
                productId: req.params.id,
                message: "Product deleted"
            });
        }
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