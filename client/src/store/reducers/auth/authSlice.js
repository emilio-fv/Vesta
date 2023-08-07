// Imports
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api/authApi";

// Initial state
const initialState = {
    loggedInUser: null,
    status: 'idle', // idle | loading | failed | success
    errors: null
};

// Auth slice
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
            .addMatcher(authApi.endpoints.logout.matchFulfilled, (state) => {
                state.loggedInUser = null
                state.status = 'idle'
                state.errors = null
            })
    }
});

// Reducer
export default authSlice.reducer;