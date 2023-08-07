// Imports
const { models: { Product } } = require('../models/index');
const { logger } = require('../utils/logger.utils');

const createProduct = async (data) => {
    logger.info('Service: createProduct')
    const newProduct = await Product.create(data);
    return newProduct;
}

const getAllProducts = async () => {
    logger.info('Service: getAllProducts')
    const allProducts = await Product.findAll();
    return allProducts;
}

const updateProductById = async (data, id) => {
    logger.info('Service: updateProductById')
    const updatedProduct = await Product.update(data, {
        where: {
            id: id
        },
        returning: true
    })
    return updatedProduct;
}

const deleteProductById = async (id) => {
    logger.info('Service: deleteProductById')
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