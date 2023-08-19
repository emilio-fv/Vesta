// Imports
const { Sequelize } = require('sequelize');
const { models: { User } } = require('../../models/index');
const { logger } = require('../../utils/logger.utils');

const createUser = async (data) => {
    logger.info('Service: createUser');
    const newUser = await User.create(data);
    return newUser;
};

const getUserByEmail = async (email) => {
    logger.info('Service: getUserByEmail');
    const foundUser = await User.findOne({
        where: {
            email: email
        }
    })
    return foundUser;
};

const updateUserById = async (id, data) => {
    logger.info('Service: updateUserById');
    console.log(id, data);
    const updatedUser = await User.update(data, {
        where: {
            id: id
        },
        returning: true
    });

    return updatedUser;
};

// Exports
module.exports = {
    createUser,
    getUserByEmail,
    updateUserById
};