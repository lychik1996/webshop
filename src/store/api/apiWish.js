import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const URL = 'http://localhost:3001/wishList';
export const apiWish = createApi({
  tagTypes: ['wishList'],
  reducerPath: 'wishList',
  baseQuery: fetchBaseQuery({
    baseUrl: URL,
  }),
  endpoints: (builder) => ({
    loadWishList: builder.query({
      query: () => '/',
      providesTags: () => [{ type: 'wishList' }],
    }),
    addInWishList: builder.mutation({
      query: (body) => ({
        body: body,
        method: 'POST',
        url: '/',
      }),
      invalidatesTags: () => [{ type: 'wishList' }],
    }),
    deleteInWishList: builder.mutation({
      query: (id) => ({
        method: 'DELETE',
        url: `/${id}`,
      }),
      invalidatesTags: () => [{ type: 'wishList' }],
    }),
  }),
});
export const {
  useAddInWishListMutation,
  useDeleteInWishListMutation,
  useLoadWishListQuery,
} = apiWish;
