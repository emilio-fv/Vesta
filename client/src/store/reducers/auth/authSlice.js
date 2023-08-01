// Imports
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api/authApi";

// Initial State
const initialState = {
    loggedInUser: null,
    status: 'idle', // idle | loading | failed | success
    errors: null
};

// Auth Slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
                state.status = 'success'
                state.loggedInUser = action.payload
            })
            .addMatcher(authApi.endpoints.login.matchFulfilled, (state, action) => {
                state.status = 'success'
                state.loggedInUser = action.payload
            })
    }
});

// Reducer
export default authSlice.reducer;