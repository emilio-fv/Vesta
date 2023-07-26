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


// Register User
const handleRegisterUser = async (req, res) => {
    // TODO: Log controller method

    // Extract form data
    const { firstName, lastName, email, password } = req.body;

    // Check if email registered
    const foundUser = await getUserByEmail(email);

    // Handle email already registered
    if (foundUser) {
        return res.status(400).json({ message: "Email already registered." });
    }

    // Insert user into db
    try {
        const newUser = await createUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        });
        
        // Generate access token
        const accessToken = await generateAccessToken({
            userId: newUser.id,
            email: newUser.email
        });

        // Generate refresh token
        const refreshToken = await generateRefreshToken({
            userId: newUser.id,
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
        // TODO: log error
        return res.status(400).json({
            message: "User not successfully created.",
            error: error
        })
    }
};

// Login User
const handleLoginUser = async (req, res) => {
    // TODO: log controller method
    
    // Destructure request body
    const { email, password } = req.body;
    
    // Check if email registered
    const foundUser = await getUserByEmail(email);

    // If Email not found
    if (foundUser === null) {
        return res.status(400).json({ message: "Email not registered." });
    }

    try {
        // Compare hashed passwords
        const correctPassword = await bcrypt.compare(password, foundUser.password);

        // Handle incorrect password
        if (!correctPassword) {
            return res.status(400).json({ message: "Invalid login."});
        }

        // Generate access token
        const accessToken = await generateAccessToken({
            userId: newUser.id,
            email: newUser.email
        });

        // Generate refresh token
        const refreshToken = await generateRefreshToken({
            userId: newUser.id,
            email: newUser.email
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
        // TODO: Log error
        return res.status(400).json(error);
    }
};

// Logout User
const handleLogoutUser = async (req, res) => {
    // TODO: Log controller method
    return res.clearCookie("accessToken").clearCookie("refreshToken").sendStatus(200);
};

// TODO: Refresh access token
const handleRefreshAccessToken = async (req, res) => {
    // TODO Log controller method
    // Extract refresh token
    const { refreshToken } = req.cookies;

    try {        
        // Verify refresh token
        jwt.verify(refreshToken, process.env.REFRESH_SECRET, (err, decoded) => {
            // Handle expired refresh token
            if (err.message === 'expiredToken') {
                return res.status(401).json({ message: "expiredRefreshToken"})
            }

            // Generate new access token
            const newAccessToken = generateAccessToken({
                ...decoded
            });

            // Update access token
            return res.cookie("accessToken", newAccessToken, {
                httpOnly: true,
                secure: true
            })
        })
    } catch (error) {
        // TODO: Log error
        return res.status(400).json(error);
    }
}

const handleGetAllUsers = async (req, res) => {
    // TODO: Log controller method
    try {
        const response = await getAllUsers();
        return res.status(200).json(response);
    } catch (error) {
        // TODO: Log error
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