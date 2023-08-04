// Imports
const { db } = require('../config/db.config');
const { Inventory } = require("./inventory.model");
const { Product } = require("./product.model");
const { User } = require("./user.model");

// Associations
Product.hasMany(Inventory);
Inventory.belongsTo(Product);

module.exports = {
  db,
  models: {
    User,
    Product, 
    Inventory,
  }
}