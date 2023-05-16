// Import data types, database connection, bcrypt
const { DataTypes } = require('sequelize');
const { db } = require('../config/db.config');
const bcrypt = require('bcrypt');

// User Model
const User = db.define('User', {
    id: { 
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "First name required."
            },
            len: {
                args: [1,65],
                msg: "First name required."
            }
        }
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Last name required."
            },
            len: {
                args: [1,65],
                msg: "Last name required."
            }
        }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Email required."
            },
            isEmail: {
                args: true,
                msg: "Invalid email."
            },
            len: {
                args: [1,65],
                msg: "Email required."
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Password required."
            },
            len: {
                args: [1,65],
                msg: "Password required."
            }
        }
    },
    admin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, 
{ 
    underscored: true,
    hooks: {
        beforeCreate: async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSaltSync(10, 'a');
                user.password = bcrypt.hashSync(user.password, salt);
                console.log(user.password);
            }
        },
        beforeUpdate: async (user) => {
            if (user.password) {
                const salt = await bcrypt.genSaltSync(10, 'a');
                user.password = bcrypt.hashSync(user.password, salt);
            }
        }
    },
});

module.exports = {
    User: User
}