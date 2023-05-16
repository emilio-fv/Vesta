// Import service methods, bcrypt, jwt
const {
    createUser,
    getUserByEmail,
    getAllUsers
} = require('../services/user.service');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Register User
const handleRegisterUser = async (req, res) => {
    console.log("Controller: handleRegisterUser");
    // Destructure request body
    const { firstName, lastName, email, password } = req.body;

    // Check if email is in db
    const foundUser = await getUserByEmail(email);

    // Email already registered
    if (foundUser) {
        return res.status(400).json({
            errors: { email: { message: "Email already registered."}}
        })
    }

    // Insert user into db
    try {
        await createUser({
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        }).then(newUser => {
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
            })}
        )
    } catch (error) {
        return res.status(400).json({
            message: "User not successfully created.",
            error: error
        })
    }
};

// Login User
const handleLoginUser = async (req, res) => {
    console.log("Controller: handleLoginUser");
    // Destructure request body
    const { email, password } = req.body;
    
    // Check if email is not in db 
    const foundUser = await getUserByEmail(email);

    // If Email not found
    if (foundUser === null) {
        return res.status(400).json({ error: "Email not registered." });
    }

    try {
        // Compare hashed password
        const correctPassword = await bcrypt.compare(password, foundUser.password);
        if (!correctPassword) {
            return res.status(400).json({ error: "Invalid login."});
        }

        // Sign JWT
        const userToken = jwt.sign({
            id: foundUser.id
        }, process.env.SECRET_KEY);

        // Return user
        return res.cookie("userToken", userToken, process.env.SECRET_KEY, {
            httpOnly: true
        }).json({
            id: foundUser.id,
            firstName: foundUser.firstName,
            lastName: foundUser.lastName,
            email: foundUser.email,
            admin: foundUser.admin
        });
    } catch (error) {
        return res.status(400).json(error);
    }
};

// Logout User
const handleLogoutUser = async (req, res) => {
    console.log("Controller: handleLogoutUser");
    res.clearCookie("userToken");
    res.sendStatus(200);
};

// Get All Users
const handleGetAllUsers = async (req, res) => {
    console.log("Controller: handleGetAllUsers");
    const response = await getAllUsers();
    const allUsers = []
    for (let row of response) {
        allUsers.push({
            id: row.id,
            firstName: row.firstName,
            lastName: row.lastName
        })
    }
    return res.json(allUsers);
}

// Exports
module.exports = {
    handleRegisterUser: handleRegisterUser,
    handleLoginUser: handleLoginUser,
    handleLogoutUser: handleLogoutUser,
    handleGetAllUsers: handleGetAllUsers
};