// Imports
const { db } = require('../config/db.config');
const { User } = require('./user');
const { Product } = require('./product');
const { Inventory } = require('./inventory');

// Product and inventory association
Product.hasMany(Inventory, { as: 'inventory' });
Inventory.belongsTo(Product);

// Exports
module.exports = {
  db,
  models: {
    User,
    Product, 
    Inventory,
  }
};