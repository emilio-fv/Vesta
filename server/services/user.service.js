// Import User model
const { User } = require('../models/user.model');

// Create User
const createUser = async (data) => {
    console.log("Service: createUser");
    const newUser = await User.create(data);
    return newUser;
}

// Get User By Email
const getUserByEmail = async (email) => {
    console.log("Service: getUserByEmail");
    const foundUser = await User.findOne({
        where: {
            email: email
        }
    })
    return foundUser;
}

// Get All Users
const getAllUsers = async() => {
    console.log("Service: getAllUsers");
    const allUsers = await User.findAll();
    return allUsers;
}

// Exports
module.exports = {
    createUser: createUser,
    getUserByEmail: getUserByEmail,
    getAllUsers: getAllUsers,
}