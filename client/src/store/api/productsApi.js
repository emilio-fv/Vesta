// Imports
import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '../middleware/reauthentication';

// Products API slice
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        url: '/products/create',
        method: 'POST',
        body: data
      })
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: '/products/all',
        method: 'GET'
      })
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `products/${data.id}/update`,
        method: 'PATCH',
        body: data
      })
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}/delete`,
        method: 'DELETE'
      })
    })
  })
});

// API hooks
export const { useCreateProductMutation, useGetAllProductsQuery, useUpdateProductMutation, useDeleteProductMutation } = productsApi;