// Imports
const { DataTypes } = require('sequelize');
const { db } = require('../../config/db.config');
const { Product } = require('../product');

// Inventory model
const Inventory = db.define('Inventory', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    onSale: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    discount: {
        type: DataTypes.DECIMAL(3,2),
        defaultValue: 0,
        validate: {
            isDecimal: {
                args: true,
                msg: "Valid discount required."
            },
            isPercentage(value) {
                if (parseInt(value) < 0 || parseInt(value) >= 1) {
                    throw new Error('Discount must be between 0% and 100%.');
                }
            }
        }
    },
    featured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    productId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Product',
            key: 'id'
        }
    }
},
{
    underscored: true,
    tableName: 'inventory',
});

// Exports
module.exports = {
    Inventory
}