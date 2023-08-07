// Imports
import { createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../../api/productsApi";

// Initial state
const initialState = {
    products: [],
    status: 'idle', // idle | loading | failed | success
    errors: null
};

// Product Slice
export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        resetErrors: (state) => {
            state.status = 'idle'
            state.errors = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(productsApi.endpoints.createProduct.matchFulfilled, (state, action) => {
                state.status = 'success'
                state.products.push(action.payload);
            })
            .addMatcher(productsApi.endpoints.getAllProducts.matchFulfilled, (state, action) => {
                state.status = 'success'
                state.products = action.payload;
            })
            .addMatcher(productsApi.endpoints.updateProduct.matchFulfilled, (state, action) => {
                state.status = 'success'
                const updatedProduct = action.payload;
                const index = state.products.findIndex((product) => parseInt(product.id) === parseInt(updatedProduct.id));
                state.products[index] = updatedProduct;
            })
            .addMatcher(productsApi.endpoints.deleteProduct.matchFulfilled, (state, action) => {
                state.status = 'success'
                const { productId } = action.payload;
                const index = state.products.findIndex((product) =>  parseInt(product.id) === parseInt(productId));
                state.products.splice(index, 1);
            })
            .addMatcher(productsApi.endpoints.deleteProduct.matchRejected, (state, action) => {
                state.status = 'failed'
                state.errors = action.payload.data.message
            })
    }
})

// TODO: Update Actions
export const { 
    resetErrors,
    sortPriceAsc, 
    sortPriceDesc, 
    sortFeatured,
    filterProducts
} = productsSlice.actions;

// Reducer
export default productsSlice.reducer;