// Imports
const {
    createUser,
    getUserByEmail,
    getAllUsers
} = require('../services/user.service');
const {
    generateAccessToken,
    generateRefreshToken
} = require('../utils/jwt.utils');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { logger } = require('../utils/logger.utils');


// Register User
const handleRegisterUser = async (req, res) => {
    logger.info("Controller: handleRegisterUser");
    try {
        // Extract form data
        const { email } = req.body;
    
        // Check if email registered
        const foundUser = await getUserByEmail(email);
    
        // Handle email already registered
        if (foundUser) {
            logger.error("Email already registered.")
            return res.status(400).json({ message: "Email already registered." });
        }

        // Add user to db
        const newUser = await createUser(req.body);

        // Generate access token
        const accessToken = generateAccessToken({
            id: newUser.id,
            email: newUser.email
        });

        // Generate refresh token
        const refreshToken = generateRefreshToken({
            id: newUser.id,
            email: newUser.email
        });

        // Return cookie wih tokens and user data
        return res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true
        }).cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true
        })
        .json({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            admin: newUser.admin
        });
    } catch (error) {
        logger.error(error);
        return res.status(400).json({
            message: "User not successfully created.",
            error: error
        })
    }
};

// Login User
const handleLoginUser = async (req, res) => {
    logger.info("Controller: handleLoginUser");
    try {
        // Destructure request body
        const { email, password } = req.body;

        // Check if email registered
        const foundUser = await getUserByEmail(email);

        // If Email not found
        if (foundUser === null) {
            logger.error("Email not registered.")
            return res.status(400).json({ message: "Email not registered." });
        }

        // Compare hashed passwords
        const correctPassword = await bcrypt.compare(password, foundUser.password);

        // Handle incorrect password
        if (!correctPassword) {
            logger.error("Invalid login.")
            return res.status(400).json({ message: "Invalid login."});
        }

        // Generate access token
        const accessToken = generateAccessToken({
            id: foundUser.id,
            email: foundUser.email
        });

        // Generate refresh token
        const refreshToken = generateRefreshToken({
            id: foundUser.id,
            email: foundUser.email
        });

        // Return user
        return res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true
        }).cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true
        }).json({
            firstName: foundUser.firstName,
            lastName: foundUser.lastName,
            admin: foundUser.admin
        });
    } catch (error) {
        logger.error(error);
        return res.status(400).json(error);
    }
};

// Logout User
const handleLogoutUser = async (req, res) => {
    logger.info("Controller: handleLogoutUser");
    return res.clearCookie("accessToken").clearCookie("refreshToken").sendStatus(200);
};

// TODO: Refresh access token
const handleRefreshAccessToken = async (req, res) => {
    logger.info("Controller: handleRefreshAccessToken");
    try {
        // Extract refresh token
        const { refreshToken } = req.cookies;

        // Verify refresh token
        jwt.verify(
            refreshToken, 
            process.env.REFRESH_SECRET, 
            (err, decoded) => {
                if (err) {
                    logger.error(err);
                    // Handle expired refresh token
                    if (err?.name === 'TokenExpiredError') {
                        return res.status(401).json({ message: "expiredRefreshToken"})
                    } else {
                        return res.status(401).json(err)
                    }
                }
                // Generate new access token
                const newAccessToken = generateAccessToken({
                    id: decoded.id,
                    email: decoded.email
                });

                // Update access token
                return res.cookie("accessToken", newAccessToken, {
                    httpOnly: true,
                    secure: true
                }).json('access token refreshed')
        })
    } catch (error) {
        logger.error(error);
        return res.status(400).json(error);
    }
}

const handleGetAllUsers = async (req, res) => {
    logger.info("Controller: handleGetAllUsers");
    try {
        const response = await getAllUsers();
        return res.status(200).json(response);
    } catch (error) {
        logger.error(error);
        return res.status(400).json(error);
    }
}

// Exports
module.exports = {
    handleRegisterUser,
    handleLoginUser,
    handleLogoutUser,
    handleRefreshAccessToken,
    handleGetAllUsers
};