// Import express, JWT authentication function, user controller methods
const express = require('express');
const { authenticate } = require('../config/jwt.config');
const {
    registerUser,
    loginUser,
    logoutUser,
    getAllUsers
} = require('../controllers/user.controller');

// Instantiate router
const router = express.Router();

// User API Routes
router.post('/register', registerUser); // ✅
router.post('/login', loginUser); // ✅
router.get('/logout', logoutUser); // ✅
router.get('/all', authenticate, getAllUsers); // ✅

// Exports 
module.exports = {
    userRouter: router
};