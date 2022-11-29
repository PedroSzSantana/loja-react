import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './counterSlice'
import { getDefaultMiddleware } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        Products: productsReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})