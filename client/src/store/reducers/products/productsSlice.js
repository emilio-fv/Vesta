// Imports
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: null,
    status: 'idle', // idle | loading | failed | success
    errors: null
};

// Product Slice
export const productsSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // builder
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