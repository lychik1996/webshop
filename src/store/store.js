import { configureStore } from "@reduxjs/toolkit";
import { apiWish } from "./api/apiWish";
import { apiBasket } from "./api/apiBasket";

const store=configureStore({
    reducer:{
        [apiWish.reducerPath]:apiWish.reducer,
        [apiBasket.reducerPath]:apiBasket.reducer,
        
    },
    middleware:data=>
    data().concat(apiWish.middleware, apiBasket.middleware),
});
export default store;