// Imports
import { createSlice } from '@reduxjs/toolkit';
import { inventoryApi } from '../../api/inventoryApi';

// Initial state
const initialState = {
  inventory: null, 
  status: 'idle', // idle | loading | failed | success
  errors: null
};

// Inventory slice
const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    resetInventory: (state) => {
      state.inventory = null
      state.status = 'idle'
      state.errors = null
    },
    sortByPriceDesc: (state) => {
      state.inventory.sort((a, b) => {
        const aPrice = parseFloat(a.price.slice(1));
        const bPrice = parseFloat(b.price.slice(1));
        return aPrice - bPrice;
      })
    },
    sortByPriceAsc: (state) => {
      state.inventory.sort((a, b) => {
        const aPrice = parseFloat(a.price.slice(1));
        const bPrice = parseFloat(b.price.slice(1));
        return bPrice - aPrice;
      })
    },
    // filter: (state, action) => {
    //   const { filter, parameters } = action.payload;

    //   if (filter === 'size') {
    //     state.inventory = state.inventory.filter(function(item) {
    //       return parameters.includes(item.size)
    //     })
    //   }

    //   if (filter === 'color') {
    //     state.inventory = state.inventory.filter(function(item) {
    //       return parameters.includes(item.color)
    //     })
    //   }

    //   if (filter === 'price') {
    //     state.inventory = state.inventory.filter(function(item) {
    //       const price = parseFloat(item.price.slice(1));
    //       return price >= parameters[0] && price <= parameters[1];
    //     })
    //   }
    // }
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
      .addMatcher(inventoryApi.endpoints.getAllInventory.matchFulfilled, (state, action) => {
        state.status = 'success'
        state.inventory = action.payload
      })
      .addMatcher(inventoryApi.endpoints.updateInventory.matchFulfilled, (state, action) => {
        state.status = 'success'
        const updatedInventory = action.payload;
        const index = state.inventory.findIndex((item) => parseInt(item.id) === parseInt(updatedInventory.id));
        state.inventory[index] = updatedInventory;
      })
      .addMatcher(inventoryApi.endpoints.deleteInventory.matchFulfilled, (state, action) => {
        state.status = 'success'
        const { inventoryId } = action.payload;
        const index = state.inventory.findIndex((item) => parseInt(item.id) === parseInt(inventoryId));
        state.inventory.splice(index, 1);
      })
      .addMatcher(inventoryApi.endpoints.getInventoryByCategory.matchFulfilled, (state, action) => {
        state.status = 'success'
        state.inventory = action.payload
      })
  }
});

// Actions
export const {
  resetInventory, 
  sortByPriceAsc,
  sortByPriceDesc,
} = inventorySlice.actions;

// Reducer
export default inventorySlice.reducer;