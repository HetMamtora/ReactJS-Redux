import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    reducerPath: 'api', //slice name in reducer
    baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3000'}),
    endpoints:(builder) => ({
        getApiByName: builder.query({
            query:() => '/posts',
        }),
        createPost: builder.mutation({
            query:(newPost)=> ({
                url:'/posts',
                method: 'POST',
                body:newPost,
            })
        }),
        deletePost: builder.mutation({
            query:(id) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
            })
        }),
        updatePost: builder.mutation({
            query:({id, ...updatedPost}) => ({
                url: `/posts/${id}`,
                method: 'PUT',
                body: updatedPost,
            })
        }),
    })
})

export const {useGetApiByNameQuery, useCreatePostMutation, useDeletePostMutation, useUpdatePostMutation} = api;