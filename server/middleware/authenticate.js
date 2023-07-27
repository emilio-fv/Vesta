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
    jwt.verify(
        accessToken, 
        process.env.ACCESS_SECRET, (err, decoded) => {
        if (err) {
            // TODO: Check for expired access token
            return res.status(401).json(err)
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