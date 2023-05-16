// Import service methods
const {
    createProduct,
    getAllProducts,
    getProductsByCategory,
    updateProductById,
    deleteProductById
} = require('../services/product.service');

// Create Product
const handleCreateProduct = async (req, res) => {
    console.log("Controller: handleCreateProduct");

    try {
        // Add product to database
        await createProduct(req.body).then(newProduct => {
            // Return product
            return res.json(newProduct)
        })
    } catch (error) {
        return res.status(400).json(error)
    }
}

// Get All Products
const handleGetAllProducts = async (req, res) => {
    console.log("Controller: handleGetAllProducts");
    // Query database
    const response = await getAllProducts();
    // Prase through results
    const allProducts = []
    for (let row of response) {
        allProducts.push({
            id: row.id,
            name: row.name,
            size: row.size,
            color: row.color,
            price: row.price,
            quantity: row.quantity,
            description: row.description,
            onSale: row.onSale,
            discount: row.discount,
            featured:  row.featured
        })
    }
    return res.json(allProducts);
}

// Get Products By Category
const handleGetProductsByCategory = async (req, res) => {
    console.log("Controller: handleGetProductsByCategory");
    // Destructure request body
    const { category } = req.body
    // Query database
    const response = await getProductsByCategory(category);
    // Parse through results
    const allProducts = [];
    for (let row of response) {
        allProducts.push({
            id: row.id,
            name: row.name,
            size: row.size,
            color: row.color,
            price: row.price,
            quantity: row.quantity,
            description: row.description,
            onSale: row.onSale,
            discount: row.discount,
            featured:  row.featured
        })
    }
    return res.json(allProducts);
}

// Update Product By Id
const handleUpdateProductById = async (req, res) => {
    console.log("Controller: handleUpdateProductById");
    // Query database
    const response = await updateProductById(req.body);
    // TODO: Parse through results
    console.log(response);
    // TODO: return results
    return;
}

// Delete Product By Id
const handleDeleteProductById = async (req, res) => {
    console.log("Controller: handleDeleteProductById");
    // Destructure request body
    const { id } = req.body;
    // Query database
    const response = await deleteProductById(id)
    // TODO: return
    return;
}

// Exports
module.exports = {
    handleCreateProduct: handleCreateProduct,
    handleGetAllProducts: handleGetAllProducts,
    handleGetProductsByCategory: handleGetProductsByCategory,
    handleUpdateProductById: handleUpdateProductById,
    handleDeleteProductById: handleDeleteProductById
}