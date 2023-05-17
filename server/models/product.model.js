// Import data types, database connection
const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');

// Product Model
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
                msg: "Name required."
            },
            len: {
                args: [1,65],
                msg: "Name required."
            }
        }
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Category required."
            }
        }
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Size required."
            }
        }
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Color required."
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
    quantity: {
        type: DataTypes.BIGINT,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Quantity required."
            },
            isInt: {
                args: true,
                msg: "Valid quantity required."
            },
            isPositive(value) {
                if (parseInt(value) < 0) {
                    throw new Error('Quantity must be greater than 0.')
                }
            }
        }
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Description required."
            }
        }
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
}, 
{
    underscored: true,
})

module.exports = {
    Product: Product
}