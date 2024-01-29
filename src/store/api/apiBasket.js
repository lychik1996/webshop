import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const URL = 'http://localhost:3001/basket';
export const apiBasket= createApi({
    tagTypes:['basket'],
    reducerPath:'basket',
    baseQuery:fetchBaseQuery({
        baseUrl:URL
    }),
    endpoints:(builder)=>({
        loadBasket:builder.query({
            query:()=>'/',
            providesTags:()=>[
                {type:'basket'}
            ]
        }),
        addInBasket:builder.mutation({
            query:(body)=>({
                body:body,
                method:"POST",
                url:'/'
            }),
            invalidatesTags:()=>[
                {type:'basket'}
            ]
        }),
        deleteInBasket:builder.mutation({
            query:(id)=>({
                url:`/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:()=>[
                {type:'basket'}
            ]
        }),
        changeCountBasket:builder.mutation({
            query:({id,count})=>({
                url:`/${id}`,
                method: "PATCH",
                body:{count}
            }),
            invalidatesTags:()=>[
                {type:'basket'}
            ]
        }),
    })

})
export const {useAddInBasketMutation,useDeleteInBasketMutation,useLoadBasketQuery,useChangeCountBasketMutation}=apiBasket;