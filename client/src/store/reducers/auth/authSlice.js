// Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";

// Auth Initial State
const initialState = {
    user: null,
    status: 'idle',
    messages: null
}

// Register User
export const register = createAsyncThunk('auth/register', async (formData, thunkAPI) => {
    try {
        return await authService.register(formData);
    } catch (error) {
        const messages = error.response.data.error.errors;
        return thunkAPI.rejectWithValue(messages);
    }
});

// Login User
export const login = createAsyncThunk('auth/login', async (formData, thunkAPI) => {
    try {
        return await authService.login(formData);
    } catch (error) {
        const messages = error.response.data;
        return thunkAPI.rejectWithValue(messages);
    }
})

// Logout User
export const logout = createAsyncThunk('auth/logout', async () => {
    return await authService.logout();
});

// Auth Slice
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.status = 'idle'
            state.messages = null
        },
        resetMessages: (state) => {
            state.messages = null
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload
                state.status = 'succeeded'
                state.messages = null
            })
            .addCase(register.rejected, (state, action) => {
                state.status = 'failed'
                state.messages = action.payload
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload
                state.status = 'succeeded'
                state.messages = null
            })
            .addCase(login.rejected, (state, action) => {
                state.status = 'failed'
                state.messages = action.payload
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
                state.status = 'idle'
                state.messages = null
            })
    }
});

// Export Actions & Reducers
export const { reset, resetMessages }  = authSlice.actions;
export default authSlice.reducer;