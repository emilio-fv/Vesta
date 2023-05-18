// Import configureStore, reducers
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth/authSlice';
import productsReducer from './reducers/products/productsSlice';

// Redux Store
export const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productsReducer
    },
});