// Imports
const { models: { Inventory } } = require('../../models/index');
const { Product } = require('../../models/product');
const { logger } = require('../../utils/logger.utils');

const createInventory = async (data) => {
  logger.info('Service: createInventory');
  let newInventory = await Inventory.create(data);

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

const getInventoryByProduct = async (id) => {
  logger.info('Service: getInventoryByProduct');
  const inventory = await Product.findAll({
    attributes: ['id', 'name', 'category', 'price', 'description', 'src'],
    include: ['inventory']
  });

  return inventory;
};

const getInventoryByProductId = async (id) => {
  logger.info('Service: getInventoryByProductId');
  const inventory = await Product.findOne({
    where: {
      id: id
    },
    attributes: ['id', 'name', 'category', 'price', 'description', 'src'],
    include: ['inventory']
  });
  return inventory;
}
const getInventoryByCategory = async (category) => {
  logger.info('Service: getInventoryByCategory');
  const inventory = await Product.findAll({
    where: {
      category: category
    },
    attributes: ['id', 'name', 'category', 'price', 'description', 'src'],
    include: ['inventory']
  });
  return inventory;
}

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
  getInventoryByProduct,
  getInventoryByProductId,
  getInventoryByCategory,
  updateInventoryById,
  deleteInventoryById,
}