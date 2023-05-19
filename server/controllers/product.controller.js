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
            return res.json({
                id: newProduct.id,
                name: newProduct.name,
                category: newProduct.category,
                size: newProduct.size,
                color: newProduct.color,
                price: newProduct.price,
                quantity: newProduct.quantity,
                description: newProduct.description,
                onSale: newProduct.onSale,
                discount: newProduct.discount,
                featured:  newProduct.featured
            })
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
            category: row.category,
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
            category: row.category,
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
    console.log("Controller: handleUpdateProductById req.params: ", req.params.id);
    console.log("req.body: ", req.body);
    try {
        // Query database
        await updateProductById(req.body, req.params.id).then(updatedProduct => {
            return res.json({
                id: updatedProduct.id,
                name: updatedProduct.name,
                category: updatedProduct.category,
                size: updatedProduct.size,
                color: updatedProduct.color,
                price: updatedProduct.price,
                quantity: updatedProduct.quantity,
                description: updatedProduct.description,
                onSale: updatedProduct.onSale,
                discount: updatedProduct.discount,
                featured:  updatedProduct.featured
            })
        });
    } catch (error) {
        res.status(400).json(error);
    }
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