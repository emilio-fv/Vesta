// Imports
import { createSlice } from '@reduxjs/toolkit';
import { inventoryApi } from '../../api/inventoryApi';

// Initial State
const initialState = {
  inventory: null, 
  status: 'idle', // idle | loading | failed | success
  errors: null
};

const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    sortByPriceAsc: (state) => {
      state.inventory.sort((a, b) => {
        const aPrice = parseFloat(a.price.slice(1));
        const bPrice = parseFloat(b.price.slice(1));
        return aPrice - bPrice;
      })
    },
    sortByPriceDesc: (state) => {
      state.inventory.sort((a, b) => {
        const aPrice = parseFloat(a.price.slice(1));
        const bPrice = parseFloat(b.price.slice(1));
        return bPrice - aPrice;
      })
    },
    sortByFeatured: (state) => {
      state.inventory.sort((a, b) => {
        return b.featured - a.featured;
      })
    },
    filter: (state, action) => {
      const { filter, parameters } = action.payload;

      if (filter === 'size') {
        state.inventory = state.inventory.filter(function(item) {
          return parameters.includes(item.size)
        })
      }

      if (filter === 'color') {
        state.inventory = state.inventory.filter(function(item) {
          return parameters.includes(item.color)
        })
      }

      if (filter === 'price') {
        state.inventory = state.inventory.filter(function(item) {
          const price = parseFloat(item.price.slice(1));
          return price >= parameters[0] && price <= parameters[1];
        })
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(inventoryApi.endpoints.createInventory.matchFulfilled, (state, action) => {
        state.status = 'success'
        if (!state.inventory) {
          state.inventory = [];
        }
        state.inventory.push(action.payload);
      })
  }
});

// Actions
export const {
  sortByPriceAsc,
  sortByPriceDesc,
  sortByFeatured,
  filter
} = inventorySlice.actions;

// Reducer
export default inventorySlice.reducer;