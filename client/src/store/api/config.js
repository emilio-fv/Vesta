import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

export const baseQuery = fetchBaseQuery({ baseUrl: 'http://localhost:8000/api', credentials: 'include' });