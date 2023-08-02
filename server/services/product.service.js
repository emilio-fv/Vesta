// Imports
const { Product } = require('../models/product.model');

// Create Product
const createProduct = async (data) => {
    // TODO log service
    const newProduct = await Product.create(data);
    return newProduct;
}

// Get All Products
const getAllProducts = async () => {
    // TODO log service
    const allProducts = await Product.findAll();
    return allProducts;
}

// Update Product By Id
const updateProductById = async (data, id) => {
    // TODO log service
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
    // TODO log service
    const numOfDeletedProducts = await Product.destroy({
        where: {
            id: id
        }
    })
    return numOfDeletedProducts;
}

// Exports
module.exports = {
    createProduct,
    getAllProducts,
    updateProductById,
    deleteProductById
}