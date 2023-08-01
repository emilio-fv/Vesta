// Configure environment variables
require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}`});

// Imports
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { db } = require('./config/db.config'); 

// API Routers
const { userRouter } = require('./routes/user');
const { productRouter } = require('./routes/products');

// Create backend Server
const app = express();

// Middleware
app.use(cors({
    origin: '*', // TODO: update for production
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true 
}));

// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/products', productRouter);

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