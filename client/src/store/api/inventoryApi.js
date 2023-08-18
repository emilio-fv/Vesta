// Imports
import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '../middleware/reauthentication';

// Inventory API slice
export const inventoryApi = createApi({
  reducerPath: 'inventoryApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Inventory'],
  endpoints: (builder) => ({
    createInventory: builder.mutation({
      query: (data) => ({
        url: '/inventory/create',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Inventory']
    }),
    getAllInventoryAdmin: builder.query({
      query: () => ({
        url: '/inventory/admin',
        method: 'GET'
      }),
      providesTags: ['Inventory']
    }),
    getAllInventory: builder.query({
      query: () => ({
        url: '/inventory/',
        method: 'GET'
      }),
      providesTags: ['Inventory']
    }),
    getAllInventoryByCategory: builder.query({
      query: (category) => ({
        url: `/inventory/${category}/all`,
        method: 'GET'
      }),
      providesTags: ['Inventory']
    }),
    getInventoryByProductId: builder.query({
      query: (id) => ({
        url: `/inventory/${id}/inventory`,
        method: 'GET'
      }),
      providesTags: ['Inventory']
    }),
    updateInventory: builder.mutation({
      query: (data) => ({
        url: `/inventory/${data.id}/update`,
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['Inventory']
    }),
    deleteInventory: builder.mutation({
      query: (id) => ({
        url: `/inventory/${id}/delete`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Inventory']
    }),
  })
});

// Export API hooks
export const { 
  useCreateInventoryMutation,
  useGetAllInventoryAdminQuery,
  useGetAllInventoryQuery,
  useGetAllInventoryByCategoryQuery,
  useGetInventoryByProductIdQuery,
  useUpdateInventoryMutation,
  useDeleteInventoryMutation
} = inventoryApi;