// Import User model, bcrypt, jwt
const { User } = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register User
const registerUser = async (req, res) => {
    console.log("Controller: registerUser");
    try {
        // Destructure request body
        const { firstName, lastName, email, password } = req.body;
        
        // Check if email is in db
        const response = await User.findOne({
            where: {
                email: email
            }
        });

        // Email already registered
        if (response) {
            return res.status(400).json({
                error: "Email already registered."
            })
        };

        // Hash password
        bcrypt.hash(password, 10, (err, hash) => {
            // Insert user into db
            const newUser = User.create({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: hash
            })

            // Sign JWT 
            const userToken = jwt.sign({
                id: newUser.id
            }, process.env.SECRET_KEY);

            // Return user
            return res.cookie("userToken", userToken, process.env.SECRET_KEY, {
                httpOnly: true
            }).json({
                id: newUser.id,
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                admin: newUser.admin
            })
        });
    } catch (error) {
        return res.status(400).json(error);
    }
}

// Login User
const loginUser = async (req, res) => {
    console.log("Controller: loginUser");
    try {
        // Destructure request body
        const { email, password } = req.body;

        // Check if email is not in db
        const response = await User.findOne({
            where: {
                email: email
            }
        })

        // If email not found
        if (response === null) {
            return res.status(400).json({ error: "Invalid login."});
        }

        // Compare hashed password
        const correctPassword = await bcrypt.compare(password, response.password);

        if (!correctPassword) {
            return res.status(400).json({ error: "Invalid login."});
        }

        // Sign JWT
        const userToken = jwt.sign({
            id: response.id
        }, process.env.SECRET_KEY);

        // Return user
        return res.cookie("userToken", userToken, process.env.SECRET_KEY, {
            httpOnly: true
        }).json({
            id: newUser.id,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            admin: newUser.admin
        });
    } catch (error) {
        return res.status(400).json(error);
    }
}

// Logout User
const logoutUser = async (req, res) => {
    console.log("Controller: logoutUser");
    res.clearCookie("userToken");
    res.sendStatus(200);
}

// Get All Users
const getAllUsers = async (req, res) => {
    console.log("Controller: getAllUsers");
    try {
        const response = await User.findAll();
        const allUsers = []
        for (let row of response) {
            allUsers.push({
                id: row.id,
            })
        }
        return res.json(allUsers)
    } catch (error) {
        return res.status(400).json(error);
    }
}

// Exports
module.exports = {
    registerUser: registerUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
    getAllUsers: getAllUsers
};