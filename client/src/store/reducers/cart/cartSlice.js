// Imports
import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  cart: [],
  status: 'idle',
  errors: null
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    resetStatus: (state) => {
      state.status = 'idle'
    },
    addToCart: (state, action) => {
      state.status = 'added'
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart.splice(action.payload, 1);
    }
  }
});

// Actions
export const {
  resetStatus,
  addToCart,
  removeFromCart
} = cartSlice.actions;

// Reducer
export default cartSlice.reducer;