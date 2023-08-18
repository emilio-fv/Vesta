// Imports
const {
    createUser,
    getUserByEmail,
    updateUserById
} = require('../../services/user');
const {
    generateAccessToken,
    generateRefreshToken
} = require('../../utils/jwt.utils');
const { logger } = require('../../utils/logger.utils');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const handleRegisterUser = async (req, res) => {
    logger.info("Controller: handleRegisterUser");
    try {
        // Check if email registered
        const foundUser = await getUserByEmail(req.body.email);
    
        // Handle email already registered
        if (foundUser) {
            logger.error("Email already registered.");
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
            secure: true,
            sameSite: 'none'
        }).cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        })
        .json({
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            admin: newUser.admin,
            favorites: newUser.favorites
        });
    } catch (error) {
        logger.error(error);
        return res.status(400).json({
            message: "User not successfully created.",
            error: error
        });
    }
};

const handleLoginUser = async (req, res) => {
    logger.info("Controller: handleLoginUser");
    try {
        // Check if email registered
        const foundUser = await getUserByEmail(req.body.email);

        // If Email not found
        if (foundUser === null) {
            logger.error("Email not registered.");
            return res.status(400).json({ message: "Email not registered." });
        }

        // Compare hashed passwords
        const correctPassword = await bcrypt.compare(req.body.password, foundUser.password);

        // Handle incorrect password
        if (!correctPassword) {
            logger.error("Invalid login.");
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
            secure: true,
            sameSite: 'none'
        }).cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none'
        }).json({
            firstName: foundUser.firstName,
            lastName: foundUser.lastName,
            email: foundUser.email,
            admin: foundUser.admin,
            favorites: foundUser.favorites
        });
    } catch (error) {
        logger.error(error);
        return res.status(400).json(error);
    }
};

const handleLogoutUser = async (req, res) => {
    logger.info("Controller: handleLogoutUser");
    return res.clearCookie("accessToken").clearCookie("refreshToken").json("Logged out");
};

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
                }).json('access token refreshed');
        })
    } catch (error) {
        logger.error(error);
        return res.status(400).json(error);
    }
};

const handleUpdateUserById = async (req, res) => {
    logger.info('Controller: handleUpdateUserById');
    try {
        const response = await updateUserById(req.decoded.id, req.body);
        const userData = response[1][0];
        return res.status(200).json({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            admin: userData.admin,
            favorites: userData.favorites
        });
    } catch (error) {
        logger.error(error);
        return res.status(400).json(error);
    }
};

// Exports
module.exports = {
    handleRegisterUser,
    handleLoginUser,
    handleLogoutUser,
    handleRefreshAccessToken,
    handleUpdateUserById
};