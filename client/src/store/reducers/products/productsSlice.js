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