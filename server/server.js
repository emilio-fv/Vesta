// Configure environment variables
require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}`});

// Imports
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { db } = require('./config/db.config'); 

// API Routers
const { authRouter } = require('./routes/auth');
const { productsRouter } = require('./routes/products');

// Create backend Server
const app = express();

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // TODO: update for production
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    methods: ['POST', 'PUT', 'GET', 'PATCH'],
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ 
    extended: true 
}));

// API Endpoints
app.use('/api/auth', authRouter);
app.use('/api/products', productsRouter);

// Test DB connection
(async () => {
    try {
        await db.authenticate();
        console.log('connection to db established successfully.');
    } catch (error) {
        console.log(error);
        console.log("Unable to connect to db.");
    }
})()

module.exports = app;