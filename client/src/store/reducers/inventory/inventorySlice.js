// Imports
import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  filters: [],
  sort: 'Default',
  status: 'idle', // idle | loading | failed | success
  errors: null
};

// Inventory slice
export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      state.filters = action.payload
    },
    setSort: (state, action) => {
      state.sort = action.payload
    },
    resetFilters: (state) => {
      state.filters = []
    }
  },
})

// Actions
export const {
  setFilters,
  setSort,
  resetFilters,
} = inventorySlice.actions;

// Reducer
export default inventorySlice.reducer;