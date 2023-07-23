// Imports
const {
    createProduct,
    getAllProducts,
    getProductsByCategory,
    updateProductById,
    deleteProductById
} = require('../services/product.service');

// Create Product
const handleCreateProduct = async (req, res) => {
    // TODO: log controller method
    try {
        // Add product to database
        const newProduct = await createProduct(req.body);

        // Return new product
        return res.status(200).json({
            ...newProduct
        })
    } catch (error) {
        // TODO Log error
        return res.status(400).json(error)
    }
}

// Get All Products
const handleGetAllProducts = async (req, res) => {
    // TODO: log controller method
    // Query database
    const response = await getAllProducts();
    // Prase through results
    return res.json({
        products: [...response]
    });
}

// Get Products By Category
const handleGetProductsByCategory = async (req, res) => {
    // TODO: log controller method
    // Destructure request body
    const { category } = req.params;

    // Query database
    const response = await getProductsByCategory(category);

    // Return products
    return res.status(200).json({
        products: [...response]
    });
}

// Update Product By Id
const handleUpdateProductById = async (req, res) => {
    // TODO: log controller method
    try {
        // Query database
        const updatedProduct = await updateProductById(req.body, req.params.id);

        // Return updated product
        return res.status(200).json({
            updatedProduct: updatedProduct
        });
    } catch (error) {
        // TODO log error
        return res.status(400).json(error);
    }
}

// Delete Product By Id
const handleDeleteProductById = async (req, res) => {
    // TODO: log controller method
    // Destructure request body
    const { id } = req.params;

    try {        
        // Query database
        const response = await deleteProductById(id);

        // Return success message
        return res.status(200).json("Product deleted.");
    } catch (error) {
        // TODO: log error
        return res.status(400).json(error);
    }
}

// Exports
module.exports = {
    handleCreateProduct,
    handleGetAllProducts,
    handleGetProductsByCategory,
    handleUpdateProductById,
    handleDeleteProductById
};