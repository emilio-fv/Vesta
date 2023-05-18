// Imports
import axios from "axios";

const API_URL = 'http://localhost:8080/api/products/';

// Create Product
const createProduct = async (formData) => {
    const response = await axios.post(API_URL + 'create', formData, { withCredentials: true });
    return response.data;
}

const productsService = {
    createProduct
};

export default productsService;