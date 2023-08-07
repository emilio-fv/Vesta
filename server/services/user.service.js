// Imports
const { models: { User } } = require('../models/index');
const { logger } = require('../utils/logger.utils');

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

const getAllUsers = async() => {
    logger.info('Service: getAllUsers');
    const allUsers = await User.findAll();
    return allUsers;
};

const deleteUserById = async (id) => {
    logger.info('Service: deleteUserById');
    const deletedUser = await User.destroy({
        where: {
            id: id
        }
    })
    return deletedUser;
};

// Exports
module.exports = {
    createUser,
    getUserByEmail,
    getAllUsers,
    deleteUserById
};