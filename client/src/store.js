// Import configureStore, reducers
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth/authSlice';

// Redux Store
export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});