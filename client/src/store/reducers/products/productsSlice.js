// Imports
import { createSlice } from "@reduxjs/toolkit";
import { productsApi } from "../../api/productsApi";

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
        // sort by name
        // sort by category
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
    }
})

// Actions
export const { 
    sortPriceAsc, 
    sortPriceDesc, 
    sortFeatured,
    filterProducts
} = productsSlice.actions;

// Reducer
export default productsSlice.reducer;