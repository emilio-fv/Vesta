// Imports
import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '../middleware/reauthentication';

// Inventory API slice
export const inventoryApi = createApi({
  reducerPath: 'inventoryApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    createInventory: builder.mutation({
      query: (data) => ({
        url: '/inventory/create',
        method: 'POST',
        body: data
      })
    }),
    getAllInventory: builder.query({
      query: () => ({
        url: '/inventory/all',
        method: 'GET'
      }),
    }),
    getInventoryByCategory: builder.query({
      query: (category) => ({
        url: `/inventory/${category}/all`,
        method: 'GET'
      })
    }),
    getFavorites: builder.query({
      query: (data) => ({
        url: '/inventory/favorites',
        method: 'GET',
        body: data
      })
    }),
    updateInventory: builder.mutation({
      query: (data) => ({
        url: `/inventory/${data.id}/update`,
        method: 'PATCH',
        body: data
      })
    }),
    deleteInventory: builder.mutation({
      query: (id) => ({
        url: `/inventory/${id}/delete`,
        method: 'DELETE'
      })
    })
  })
});

// Export API hooks
export const { 
  useCreateInventoryMutation, 
  useDeleteInventoryMutation, 
  useGetAllInventoryQuery,
  useGetFavoritesQuery,
  useGetInventoryByCategoryQuery, 
  useUpdateInventoryMutation 
} = inventoryApi;