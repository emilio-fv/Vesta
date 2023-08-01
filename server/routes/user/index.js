// Imports
const express = require('express');
const { authenticate } = require('../../middleware/authenticate');
const {
    handleRegisterUser,
    handleLoginUser,
    handleLogoutUser,
    handleRefreshAccessToken,
    handleGetAllUsers,
    handleDeleteUser
} = require('../../controllers/user.controller');

// Instantiate router
const router = express.Router();

// User API routes
router.post('/register', handleRegisterUser); 
router.post('/login', handleLoginUser); 
router.get('/logout', handleLogoutUser); 
router.get('/refresh', handleRefreshAccessToken);
router.get('/all', handleGetAllUsers);
router.delete('/:id/delete', handleDeleteUser);

// Exports 
module.exports = {
    userRouter: router
};