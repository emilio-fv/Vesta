// Imports
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api/authApi";

// Initial state
const initialState = {
    loggedInUser: null,
    status: 'idle',
    errors: null
};

// Auth slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            if (!state.loggedInUser.favorites) {
                state.loggedInUser.favorites = []
            }
            state.loggedInUser.favorites.push(action.payload);
        },
        removeFavorite: (state, action) => {
            const index = state.loggedInUser.favorites.findIndex((id) => parseInt(id) === parseInt(action.payload));
            state.loggedInUser.favorites.splice(index, 1);
        },
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
            .addMatcher(authApi.endpoints.updatedUser.matchFulfilled, (state, action) => {
                state.loggedInUser = action.payload
            })
    }
});

// Actions
export const {
    addFavorite,
    removeFavorite
} = authSlice.actions;

// Reducer
export default authSlice.reducer;