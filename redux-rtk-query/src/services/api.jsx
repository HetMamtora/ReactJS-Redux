import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api', //slice name in reducer
    baseQuery: fetchBaseQuery({baseUrl:''})
})