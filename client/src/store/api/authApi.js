// Imports
import { createApi } from '@reduxjs/toolkit/query/react'
import { baseQueryWithReauth } from '../middleware/reauthentication';

// Auth API slice
export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: '/auth/register',
        method: 'POST',
        body: data
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: '/auth/login',
        method: 'POST',
        body: data
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/auth/logout',
        method: 'POST',
      }),
    }),
    refresh: builder.mutation({
      query: () => ({
        url: '/auth/refresh',
        method: 'GET'
      }),
    }),
    updatedUser: builder.mutation({
      query: (data) => ({
        url: '/auth/update',
        method: 'PATCH',
        body: data
      })
    })
  })
});

// Export API hooks
export const { 
  useLoginMutation, 
  useLogoutMutation, 
  useRefreshMutation, 
  useRegisterMutation, 
  useUpdatedUserMutation
} = authApi;