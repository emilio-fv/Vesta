// Imports
const Sequelize = require('sequelize');

// Configs
const config = process.env.NODE_ENV === 'production'
    ? process.env.DATABASE_URL
    : `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`

// Connect to postgres db
const db = new Sequelize(config,
    {
        dialect: 'postgres',
        logging: log => console.log('logging:', log)
    }
);

// Exports
module.exports = {
    db
};