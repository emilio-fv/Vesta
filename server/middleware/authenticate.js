// Import JWT
const jwt = require('jsonwebtoken');

// Authenticate User
const authenticate = (req, res, next) => {
    // Extract access token
    const { accessToken } = req.cookies;

    // Check for undefined access token
    if (!accessToken) {
        return res.status(401).json({ error: "undefinedAccessToken" });
    }

    // Verify access token
    jwt.verify(accessToken, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            // Check for expired access token
            return res.status(401).json({ error: "expiredAccessToken" })
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