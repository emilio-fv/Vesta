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
                const updatedProduct = action.payload
                const index = state.products.findIndex((product) => product.id === updatedProduct.id);
                state.products[index] = updatedProduct;
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