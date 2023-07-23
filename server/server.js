// Configure environment variables
require('dotenv').config({ path: `./.env.${process.env.NODE_ENV}`});

// Imports
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

// API Routers
const { userRouter } = require('./routes/user.routes');
const { productRouter } = require('./routes/product.routes');

// Port #
const port =  process.env.PORT || 8000;

// Create Server
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
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

// Test DB connection
const { db } = require('./config/db.config'); 
try {
    db.authenticate();
    console.log("Connection to db established");
} catch (error) {
    console.log("Unable to connect to db.");
}

// Start Server
app.listen(port, () => {
    console.log(`You are listening on port ${port} for requests to respond to.`);
});

app.get('/', (req, res) => {
    res.json("Welcome to the Vesta backend server.");
})