// Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "./productsService";

// Products Initial State
const initialState = {
    products: [],
    status: 'idle',
    messages: null
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

// Product Slice
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        resetMessages: (state) => {
            state.messages = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(createProduct.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createProduct.fulfilled, (state, action) => {
                state.products.push(action.payload)
                state.status = 'succeeded'
                state.messages = null
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.status = 'failed'
                state.messages = action.payload
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.products = action.payload
            })
    }
})

// Export Actions & Reducers
export const { resetMessages } = productsSlice.actions;
export default productsSlice.reducer;