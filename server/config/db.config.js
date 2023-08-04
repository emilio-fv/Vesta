// Imports
const Sequelize = require('sequelize');

// Connect to postgres db
const db = new Sequelize(
    process.env.DB_NAME, 
    process.env.DB_USER, 
    process.env.DB_PASSWORD, 
    {
        host: process.env.DB_HOST,
        dialect: 'postgres',
        logging: log => console.log('logging:', log)
    }
);

// Exports
module.exports = {
    db
};