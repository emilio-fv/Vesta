import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const baseUrl = process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:8000/api';

export const baseQuery = fetchBaseQuery({ baseUrl, credentials: 'include' });