import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api', //slice name in reducer
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000'}),
    endpoints:(builder) => ({
        getApiByName: builder.query({
            query:() => '/posts',
        })
    })
})

export const {useGetApiByNameQuery} = api;