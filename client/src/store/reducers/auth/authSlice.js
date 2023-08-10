// Imports
import { createSlice } from "@reduxjs/toolkit";
import { authApi } from "../../api/authApi";

// Initial state
const initialState = {
    loggedInUser: null,
    favorites: [],
    status: 'idle', // idle | loading | failed | success
    errors: null
};

// Auth slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload);
        },
        removeFavorite: (state, action) => {
            const index = state.favorites.findIndex((id) => parseInt(id) === parseInt(action.payload));
            state.favorites.splice(index, 1);
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
    }
});

// Actions
export const {
    addFavorite,
    removeFavorite
} = authSlice.actions;

// Reducer
export default authSlice.reducer;