import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users/';

// Register User
const register = async (formData) => {
    const response = await axios.post(API_URL + 'register', formData, { withCredentials: true });
    return response.data;
}

// Login User
const login = async (formData) => {
    const response = await axios.post(API_URL + 'login', formData, { withCredentials: true });
    return response.data;
}

// Logout User 
const logout = async () => {
    const response = await axios.get(API_URL + 'logout', { withCredentials: true });
    return response;
}

const authService = {
    register,
    login,
    logout
};

export default authService;