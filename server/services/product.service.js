// Import Product model
const { Product } = require('../models/product.model');

// Create Product
const createProduct = async (data) => {
    console.log("Service: createProduct");
    const newProduct = await Product.create(data);
    return newProduct;
}

// Get All Products
const getAllProducts = async () => {
    console.log("Service: getAllProducts");
    const allProducts = await Product.findAll();
    return allProducts;
}

// Get Products By Category
const getProductsByCategory = async (category) => {
    console.log("Service: getProductsByCategory");
    const allProducts = await Product.findAll({
        where: {
            category: category
        }
    })
    return allProducts;
}

// Update Product By Id
const updateProductById = async (data, id) => {
    console.log("Service: updateProductById id: ");
    const updatedProduct = await Product.update(data, {
        where: {
            id: id
        },
        returning: true
    })
    return updatedProduct;
}

// Delete Product By Id
const deleteProductById = async (id) => {
    console.log("Service: deleteProductById");
    const numOfDeletedProducts = await Product.destroy({
        where: {
            id: id
        }
    })
    return numOfDeletedProducts;
}

// Exports
module.exports = {
    createProduct: createProduct,
    getAllProducts: getAllProducts,
    getProductsByCategory: getProductsByCategory,
    updateProductById: updateProductById,
    deleteProductById: deleteProductById
}