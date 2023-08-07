// Imports
const { db } = require('../config/db.config');
const { Inventory } = require("./inventory.model");
const { Product } = require("./product.model");
const { User } = require("./user.model");

// Product and inventory association
Product.hasMany(Inventory);
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