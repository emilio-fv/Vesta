// Imports
const { Sequelize, Op } = require('sequelize');
const { models: { Inventory } } = require('../../models/index');
const { Product } = require('../../models/product');
const { logger } = require('../../utils/logger.utils');

const createInventory = async (data, productId) => {
  logger.info('Service: createInventory');
  let newInventory = await Inventory.create({
    ...data,
    ProductId: productId
  });

  newInventory = await Inventory.findOne({
    where: {
      id: newInventory.id
    },
    include: 'Product'
  })
  return newInventory;
};

const getAllInventory = async () => {
  logger.info('Service: getAllInventory');
  const allInventory = await Inventory.findAll({
    include: 'Product'
  });
  return allInventory;
};

const getInventoryByCategory = async (category) => {
  logger.info('Service: getInventoryByCategory');
  const products = await Product.findAll({
    where: {
      category: category
    },
    attributes: ['id', 'name', 'category', 'price', 'description', 'src'],
    include: ['inventory']
  });

  return products;
};

const getInventoryByProductId = async (productId) => {
  logger.info('Service: getInventoryByProductId');
  const allInventory = await Inventory.findAll({
    where: {
      productId: productId
    }
  });

  return allInventory;
};

const updateInventoryById = async (data, id) => {
  logger.info('Service: updateInventoryById');
  await Inventory.update(data, {
    where: {
      id: id
    }
  });
  const updatedInventory =  await Inventory.findOne({
    where: {
      id: id
    },
    include: 'Product'
  });
  return updatedInventory;
};

const deleteInventoryById = async (id) => {
  logger.info('Servicer: deleteInventoryById');
  const numberOfDeletedProducts = await Inventory.destroy({
    where: {
      id: id
    }
  });
  return numberOfDeletedProducts;
};

// Exports
module.exports = {
  createInventory,
  getAllInventory,
  getInventoryByProductId,
  getInventoryByCategory,
  updateInventoryById,
  deleteInventoryById
}