// Imports
const { DataTypes } = require('sequelize');
const { db } = require('../../config/db.config');
const { Inventory } = require('../inventory');

// Product model
const Product = db.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Product name required."
            },
            len: {
                args: [1,65],
                msg: "Product name required."
            }
        }
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Category required."
            },
            len: {
                args: [1,65],
                msg: "Category required."
            }
        }
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Price required."
            },
            isDecimal: {
                args: true,
                msg: "Valid price required."
            },
            min: {
                args: 0.01,
                msg: "Price must be greater than $0.01,"
            }
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Description required."
            },
            len: {
                args: [1,255],
                msg: "Description required."
            }
        }
    },
    src: {
        type: DataTypes.STRING
    },
}, 
{
    underscored: true,
    tableName: 'products',
});

// Exports
module.exports = {
    Product
};