// Imports
import axios from "axios";

const API_URL = 'http://localhost:8080/api/products/';

// Create Product
const createProduct = async (formData) => {
    const response = await axios.post(API_URL + 'create', formData, { withCredentials: true });
    return response.data;
}

// Get All Products
const getAllProducts = async () => {
    const response = await axios.get(API_URL + 'all', { withCredentials: true });
    return response.data;
}

const productsService = {
    createProduct,
    getAllProducts,
};

export default productsService;