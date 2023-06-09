// Imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productsService from "./productsService";

// Products Initial State
const initialState = {
    products: [],
    filteredProducts: [],
    category: null,
    filter: false,
    status: 'idle',
    messages: []
}

// Create Product
export const createProduct = createAsyncThunk('products/create', async (formData, thunkAPI) => {
    try {
        return await productsService.createProduct(formData);
    } catch (error) {
        const messages = error.response.data.errors;
        return thunkAPI.rejectWithValue(messages);
    }
})

// Get All Products
export const getAllProducts = createAsyncThunk('products/getAll', async () => {
    return await productsService.getAllProducts();
})

// Get All Products By Category
export const getAllProductsByCategory = createAsyncThunk('products/getAllByCategory', async (category) => {
    return await productsService.getAllProductsByCategory(category);
})

// Update Product 
export const updateProduct = createAsyncThunk('products/update', async (formData, thunkAPI) => {
    try {
        return await productsService.updateProduct(formData.id, formData);
    } catch (error) {
        const messages = error.response.data.errors;
        return thunkAPI.rejectWithValue(messages);
    }
})

// Delete Product 
export const deleteProduct = createAsyncThunk('products/delete', async (id) => {
    return await productsService.deleteProduct(id);
})

// Product Slice
export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        resetStatus: (state) => {
            state.status = 'idle'
        },
        resetMessages: (state) => {
            state.messages = []
        },
        resetProducts: (state) => {
            state.products = []
            state.status = 'idle'
        },
        setCategory: (state, action) => {
            state.category = action.payload
        },
        sortPriceAsc: (state) => {
            state.products.sort((a, b) => {
                const aPrice = parseFloat(a.price.slice(1))
                const bPrice = parseFloat(b.price.slice(1))
                return aPrice - bPrice;
            })
        },
        sortPriceDesc: (state) => {
            state.products.sort((a, b) => {
                const aPrice = parseFloat(a.price.slice(1))
                const bPrice = parseFloat(b.price.slice(1))
                return bPrice - aPrice;
            })
        },
        sortFeatured: (state) => {
            state.products.sort((a, b) => {
                return b.featured - a.featured;
            })
        },
        resetFilteredProducts: (state) => {
            state.filter = false
            state.filteredProducts = []
        },
        filterProducts: (state, action) => {
            state.filter = true
            state.filteredProducts = state.products
            if (action.payload.sizes) {
                state.filteredProducts = state.filteredProducts.filter(function(product) {
                    return action.payload.sizes.includes(product.size);
                })
            }
            if (action.payload.colors) {
                state.filteredProducts = state.filteredProducts.filter(function(product) {
                    return action.payload.colors.includes(product.color)
                })
            }
            if (action.payload.price) {
                state.filteredProducts = state.filteredProducts.filter(function(product) {
                    const price = parseFloat(product.price.slice(1));
                    return price >= action.payload.price[0] && price <= action.payload.price[1];
                })
            }
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(createProduct.fulfilled, (state, action) => {
                state.products.push(action.payload)
                state.status = 'added'
                state.messages = []
            })
            .addCase(createProduct.rejected, (state, action) => {
                state.status = 'failed'
                state.messages = action.payload
            })
            .addCase(getAllProducts.fulfilled, (state, action) => {
                state.products = action.payload
                state.status = 'succeeded'
                state.messages = []
            })
            .addCase(updateProduct.fulfilled, (state, action) => {
                state.products.forEach((item, index) => { if (item.id === action.payload.id) state.products[index] = action.payload})
                state.status = 'updated'
                state.messages = []
            })
            .addCase(updateProduct.rejected, (state, action) => {
                state.status = 'failed'
                state.messages = action.payload
            })
            .addCase(deleteProduct.fulfilled, (state, action) => {
                state.products.filter((product) => product.id === action.payload.id);
                state.status = 'updated'
            })
            .addCase(getAllProductsByCategory.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = 'succeeded'
                state.messages = []
            })
    }
})

// Export Actions & Reducers
export const { 
    resetStatus, 
    resetMessages, 
    resetProducts, 
    setCategory, 
    sortPriceAsc, 
    sortPriceDesc, 
    sortFeatured,
    resetFilteredProducts,
    filterProducts
} = productsSlice.actions;
export default productsSlice.reducer;