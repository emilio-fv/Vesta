// Imports
import { createSlice } from "@reduxjs/toolkit";

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
        // reset: (state) => {
        //     state.status = 'idle'
        //     state.messages = null
        // },
        // resetMessages: (state) => {
        //     state.messages = null
        // },
    },
    extraReducers: (builder) => {
        // builder
            // .addCase(register.fulfilled, (state, action) => {
            //     state.user = action.payload
            //     state.status = 'succeeded'
            //     state.messages = null
            // })
            // .addCase(register.rejected, (state, action) => {
            //     state.status = 'failed'
            //     state.messages = action.payload
            // })
            // .addCase(login.fulfilled, (state, action) => {
            //     state.user = action.payload
            //     state.status = 'succeeded'
            //     state.messages = null
            // })
            // .addCase(login.rejected, (state, action) => {
            //     state.status = 'failed'
            //     state.messages = action.payload
            // })
            // .addCase(logout.fulfilled, (state) => {
            //     state.user = null
            //     state.status = 'idle'
            //     state.messages = null
            // })
    }
});


// export const { reset, resetMessages }  = authSlice.actions;

// Reducer
export default authSlice.reducer;