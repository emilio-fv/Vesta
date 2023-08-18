// Imports
import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '../middleware/reauthentication';

// Products API slice
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: ['Products'],
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        url: '/products/create',
        method: 'POST',
        body: data
      }),
      invalidatesTags: ['Products']
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: '/products/all',
        method: 'GET',
      }),
      providesTags: ['Products']
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `products/${data.id}/update`,
        method: 'PATCH',
        body: data
      }),
      invalidatesTags: ['Products']
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}/delete`,
        method: 'DELETE'
      }),
      invalidatesTags: ['Products']
    })
  })
});

// Export API hooks
export const { 
  useCreateProductMutation, 
  useGetAllProductsQuery, 
  useUpdateProductMutation, 
  useDeleteProductMutation 
} = productsApi;