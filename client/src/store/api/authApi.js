// Imports
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Auth API slice
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/api' }),
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data
      }),
      // transformResponse: (response, meta, arg) => {
      //     console.log(response)
      //     return response
      //   },
      //   transformErrorResponse: (response, meta, arg) => {
      //   console.log(response)
      //   return response;
      // }, 
    }),
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data
      }),
      // transformResponse: (response, meta, arg) => response,
      // transformErrorResponse: (response, meta, arg) => response.data, 
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: '/auth/logout',
        method: 'GET',
        body: data
      }),
      // transformResponse: (response, meta, arg) => response.data,
      // transformErrorResponse: (response, meta, arg) => response.data, 
    }),
    refresh: builder.mutation({
      query: () => ({
        url: '/auth/refresh',
        method: 'GET'
      }),
      // transformResponse: (response, meta, arg) => response.data,
      // transformErrorResponse: (response, meta, arg) => response.data, 
    })
  })
});

// API hooks
export const { useLoginMutation, useLogoutMutation, useRefreshMutation, useRegisterMutation } = authApi;