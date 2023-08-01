// Imports
import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:8000/api', credentials: 'include' });

export const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // Check for expired refresh & access tokens
  if (result.error && result.error.status === 401) {
    // TODO: if expired refresh token, logout
    // TODO: if expired access token, handle refresh token
  }

  return result;
}