// Configure environment variables
require('dotenv');

// Imports
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { db } = require('./models/index');
const { authRouter } = require('./routes/auth');
const { productsRouter } = require('./routes/products');
const { inventoryRouter } = require('./routes/inventory');
const { logger } = require('./utils/logger.utils');
const path = require('path');

// Create backend server
const app = express();

// Configure port #
const port =  process.env.PORT || 8000;

// Serve static content
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
}

// Middleware
app.use(cors({
    origin: [
        'http://localhost:3000', 
        'http://localhost',
        // TODO: Update for deployment
        ],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
    methods: ['POST', 'PUT', 'GET', 'PATCH', 'DELETE'],
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ 
    extended: true 
}));

// API endpoints
app.use('/api/auth', authRouter);
app.use('/api/products', productsRouter);
app.use('/api/inventory', inventoryRouter);

// Catchall method
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client/build/index.html"));
  });

const initializeApp = async () => {
    try {
        await db.authenticate();
        logger.info('Connected to db established successfully.')
        await db.sync({ alter: true });
        app.listen(port, () => {
            logger.info(`You are listening on port ${port} for requests to respond to.`)
        });
    } catch (error) {
        logger.error(error);
    }
}

initializeApp();