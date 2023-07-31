// Import configureStore, reducers
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/auth/authSlice';
import productsReducer from './reducers/products/productsSlice';
import inventoryReducer from './reducers/inventory/inventorySlice';
import { authApi } from './api/authApi';
import { productsApi } from './api/productsApi';
import { inventoryApi } from './api/inventoryApi';

const rootReducer = combineReducers({
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    inventory: inventoryReducer,
    [inventoryApi.reducerPath]: inventoryApi.reducer
})

// Redux Store
export const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(
            authApi.middleware, 
            productsApi.middleware, 
            inventoryApi.middleware
        )
});