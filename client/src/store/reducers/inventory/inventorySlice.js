// Imports
import { createSlice } from '@reduxjs/toolkit';
import { inventoryApi } from '../../api/inventoryApi';

// Initial state
const initialState = {
  inventory: [],
  filter: false,
  filtered: [],
  status: 'idle', // idle | loading | failed | success
  errors: null
};

// Inventory slice
export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    resetInventory: (state) => {
      state.inventory = []
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
        const aPrice = parseFloat(a.price.slice(1))
        const bPrice = parseFloat(b.price.slice(1));
        return bPrice - aPrice;
      })
    },
    filter: (state, action) => {
      state.filter = true;
      const filters = action.payload;
      console.log(filters);

      if (filters.size) {
        state.filtered = state.inventory.filter((product) => 
          product.inventory.some(item => filters.size.includes(item.size))
        ).map((product) => {
          return {...product}
        })
      }

      if (filters.color) {
        state.filtered = state.inventory.filter((product) => 
          product.inventory.some(item => filters.color.includes(item.color))
        ).map((product) => {
          return {...product}
        })
      }

      if (filters.price) {
        state.filtered = state.inventory.filter((product) => 
          product.price >= filters.price[0] && product.price <= filters.price[1]
        )
      }

      if (!filters.size && !filters.color && !filters.price) {
        state.filter = false;
        state.filtered = [];
      }
    },
    resetFilter: (state) => {
      state.filter = false
      state.filtered = []
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(inventoryApi.endpoints.createInventory.matchFulfilled, (state, action) => {
        state.status = 'success'
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
})

// Actions
export const {
  resetInventory, 
  sortByPriceAsc,
  sortByPriceDesc,
  filter,
  resetFilter
} = inventorySlice.actions;

// Reducer
export default inventorySlice.reducer;