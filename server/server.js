// Import express, cors, cookies parser, body parser, routers
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const { userRouter } = require('./routes/user.routes');
const { productRouter } = require('./routes/product.routes');

// Configure .env file during development stage
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}

// Port #
const port =  process.env.PORT || 8080;

// Create Server
const app = express();

// TODO: Middleware
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
    extended: true 
}));

// API Routes
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