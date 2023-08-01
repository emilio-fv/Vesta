// Imports
const express = require('express');
const { authenticate } = require('../middleware/authenticate');
const {
    handleRegisterUser,
    handleLoginUser,
    handleLogoutUser,
    handleRefreshAccessToken,
    handleGetAllUsers
} = require('../controllers/auth.controller');

// Instantiate router
const router = express.Router();

// User API routes
router.post('/register', handleRegisterUser); 
router.post('/login', handleLoginUser); 
router.get('/logout', handleLogoutUser); 
router.get('/refresh', handleRefreshAccessToken);
router.get('/all', authenticate, handleGetAllUsers);

// Exports 
module.exports = {
    authRouter: router
};