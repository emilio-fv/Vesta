// Import JWT
const jwt = require('jsonwebtoken');
const { logger } = require('../utils/logger.utils');

// Authenticate User
const authenticate = (req, res, next) => {
    // Extract access token
    const { accessToken } = req.cookies;

    // Check for undefined access token
    if (!accessToken) {
        logger.error(error);
        return res.status(401).json({ error: "undefinedAccessToken" });
    }

    // Verify access token
    jwt.verify(
        accessToken, 
        process.env.ACCESS_SECRET, 
        (err, decoded) => {
            if (err) {
                logger.error(err);
                // Handle expired refresh token
                if (err?.name === 'TokenExpiredError') {
                    return res.status(401).json({ message: "expiredRefreshToken"})
                } else {
                    return res.status(401).json(err)
                }
            } else {
                req.decoded = decoded
                next();
            }
    });
};

// Exports
module.exports = {
    authenticate
}