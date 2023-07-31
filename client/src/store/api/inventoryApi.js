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
      })
    }),
    getInventoryByCategory: builder.query({
      query: (data) => ({
        url: `/inventory/${data.category}/all`,
        method: 'GET'
      })
    }),
    updateInventory: builder.mutation({
      query: (data) => ({
        url: `/inventory/${data.id}/update`,
        method: 'PUT',
        body: data
      })
    }),
    deleteInventory: builder.mutation({
      query: (data) => ({
        url: `/inventory/${data.id}/delete`,
        method: 'DELETE'
      })
    })
  })
});

// API hooks
export const { useCreateInventoryMutation, useDeleteInventoryMutation, useGetAllInventoryQuery, useGetInventoryByCategoryQuery, useUpdateInventoryMutation } = inventoryApi;