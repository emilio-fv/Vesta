// Imports
const express = require('express');
const { authenticate } = require('../../middleware/authenticate');
const {
    handleRegisterUser,
    handleLoginUser,
    handleLogoutUser,
    handleRefreshAccessToken,
    handleGetAllUsers,
    handleDeleteUserById
} = require('../../controllers/auth');

// Create router
const router = express.Router();

// Auth endpoints
router.post('/register', handleRegisterUser); 
router.post('/login', handleLoginUser); 
router.post('/logout', handleLogoutUser);
router.get('/refresh', handleRefreshAccessToken);
router.get('/all', authenticate, handleGetAllUsers);
router.delete('/:id/delete', authenticate, handleDeleteUserById);

// Exports 
module.exports = {
    authRouter: router
};