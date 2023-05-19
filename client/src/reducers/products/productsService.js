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

// Update Product
const updateProduct = async (id, formData) => {
    const response = await axios.put(API_URL + id + '/update', formData, { withCredentials: true });
    return response.data;
}

// Delete Product
const deleteProduct = async (id) => {
    const response = await axios.delete(API_URL + id, { withCredentials: true });
    return {
        id: id,
        response: response.data};
}

const productsService = {
    createProduct,
    getAllProducts,
    updateProduct,
    deleteProduct,
};

export default productsService;