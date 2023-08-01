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
        resetErrors: (state) => {
            state.status = 'idle'
            state.errors = null
          }
    },
    extraReducers: (builder) => {
        builder
            // .addMatcher(authApi.endpoints.register.matchRejected, (state, action) => {
            //     state.status = 'failed'
            //     state.errors = action.payload
            // })
            .addMatcher(authApi.endpoints.register.matchFulfilled, (state, action) => {
                state.status = 'success'
                state.loggedInUser = action.payload
            })
    }
});


// export const { reset, resetMessages }  = authSlice.actions;

// Reducer
export default authSlice.reducer;