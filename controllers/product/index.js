// Imports
const {
    createProduct,
    getAllProducts,
    updateProductById,
    deleteProductById
} = require('../../services/product');
const {
    getInventoryByProductId
} = require('../../services/inventory');
const { logger } = require('../../utils/logger.utils');

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

const handleGetAllProducts = async (req, res) => {
    logger.info("Controller: handleGetAllProducts");
    // Query database
    const response = await getAllProducts();

    // Return products
    return res.status(200).json(response);
}

// Update Product By Id
const handleUpdateProductById = async (req, res) => {
    logger.info("Controller: handleUpdateProductById");
    try {
        // Query database
        const updatedProduct = await updateProductById(req.params.id, req.body);

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
        const product = await getInventoryByProductId(req.params.id);

        if (product.inventory.length > 0) {
            return res.status(400).json({ message: 'Unable to delete product with inventory quantity greater than 0.' });
        };

        // Delete from database
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