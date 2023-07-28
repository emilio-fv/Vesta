// Import configureStore, reducers
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './store/reducers/auth/authSlice';
import productsReducer from './store/reducers/products/productsSlice';
import inventoryReducer from './store/reducers/inventory/inventorySlice';
import { authApi } from './store/api/authApi';
import { productsApi } from './store/api/productsApi';
import { inventoryApi } from './store/api/inventoryApi';

// Redux Store
export const store = configureStore({
    reducer: {
        auth: authReducer,
        [authApi.reducerPath]: authApi.reducer,
        products: productsReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        inventory: inventoryReducer,
        [inventoryApi.reducerPath]: inventoryApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware.concat(
            authApi.middleware, 
            productsApi.middleware, 
            inventoryApi.middleware
        )
});