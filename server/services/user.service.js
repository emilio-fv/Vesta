// Imports
const { User } = require('../models/user.model');

// Create User
const createUser = async (data) => {
    // TODO log service
    const newUser = await User.create(data);
    return newUser;
}

// Get User By Email
const getUserByEmail = async (email) => {
    // TODO log service
    const foundUser = await User.findOne({
        where: {
            email: email
        }
    })
    return foundUser;
}

// Get All Users
const getAllUsers = async() => {
    // TODO log service
    const allUsers = await User.findAll();
    return allUsers;
}

const deleteUser = async (id) => {
    const deletedUser = await User.destroy({
        where: {
            id: id
        }
    })

    return deletedUser;
}

// Exports
module.exports = {
    createUser,
    getUserByEmail,
    getAllUsers,
    deleteUser
}