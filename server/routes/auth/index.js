// Imports
const express = require('express');
const { authenticate } = require('../../middleware/authenticate');
const {
    handleRegisterUser,
    handleLoginUser,
    handleLogoutUser,
    handleRefreshAccessToken,
    handleUpdateUserById
} = require('../../controllers/auth');

// Create router
const router = express.Router();

// Auth endpoints
router.post('/register', handleRegisterUser); 
router.post('/login', handleLoginUser); 
router.post('/logout', handleLogoutUser);
router.get('/refresh', handleRefreshAccessToken);
router.patch('/update', authenticate, handleUpdateUserById);

// Exports 
module.exports = {
    authRouter: router
};