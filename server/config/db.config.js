if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    port: 5432,
    pool: {
        max: 5,
        min: 0,
        idle: 300000,
        acquire: 300000
    },
    logging: log => console.log('logging:', log)
});

module.exports = {
    db: sequelize
};