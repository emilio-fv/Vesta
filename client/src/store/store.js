// Imports
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import authReducer from './reducers/auth/authSlice';
import productsReducer from './reducers/products/productsSlice';
import inventoryReducer from './reducers/inventory/inventorySlice';
import cartReducer from './reducers/cart/cartSlice';
import { authApi } from './api/authApi';
import { productsApi } from './api/productsApi';
import { inventoryApi } from './api/inventoryApi';

// Configure Redux persist
const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ['auth', 'cart'],
}

// Combine reducers
const rootReducer = combineReducers({
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    products: productsReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    inventory: inventoryReducer,
    [inventoryApi.reducerPath]: inventoryApi.reducer,
    cart: cartReducer
})

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux store
export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        }).concat(
            authApi.middleware, 
            productsApi.middleware, 
            inventoryApi.middleware
        )
});

// Exports
export const persistor = persistStore(store);