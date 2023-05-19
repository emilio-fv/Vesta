// Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "./productsService";

// Products Initial State
const initialState = {
    products: [],
    status: 'idle',
    messages: []
}

// Create Product
export const createProduct = createAsyncThunk('products/create', async (formData, thunkAPI) => {
    try {
        return await productsService.createProduct(formData);
    } catch (error) {
        const messages = error.response.data.errors;
        return thunkAPI.rejectWithValue(messages);
    }
})

// Get All Products
export const getAllProducts = createAsyncThunk('products/getAll', async () => {
    return await productsService.getAllProducts();
})

// Update Product 
export const updateProduct = createAsyncThunk('products/update', async (formData, thunkAPI) => {
    try {
        return await productsService.updateProduct(formData.id, formData);
    } catch (error) {
        const messages = error.response.data.errors;
        return thunkAPI.rejectWithValue(messages);
    }
})

// Product Slice
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        resetMessages: (state) => {
            state.messages = []
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProduct.fulfilled, (state, action) => {
                state.products.push(action.payload)
                state.status = 'succeeded'
                state.messages = []
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.status = 'failed'
                state.messages = action.payload
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.status = 'succeeded'
                state.messages = []
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.products.forEach((item, index) => { if (item.id === action.payload.id) state.products[index] = action.payload})
                state.status = 'updated'
                state.messages = []
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.status = 'failed'
                state.messages = action.payload
            })
    }
})

// Export Actions & Reducers
export const { resetMessages } = productsSlice.actions;
export default productsSlice.reducer;