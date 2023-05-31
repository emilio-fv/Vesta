// Import express, JWT authentication function, user controller methods
const express = require('express');
const { authenticate } = require('../config/jwt.config');
const {
    handleRegisterUser,
    handleLoginUser,
    handleLogoutUser,
    handleGetAllUsers
} = require('../controllers/user.controller');

// Instantiate router
const router = express.Router();

// User API Routes
router.post('/register', handleRegisterUser); 
router.post('/login', handleLoginUser); 
router.get('/logout', handleLogoutUser); 
router.get('/all', handleGetAllUsers);

// Exports 
module.exports = {
    userRouter: router
};