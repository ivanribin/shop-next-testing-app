import CartReducer from "./slices/Cart";
import MarketReducer from "./slices/Market";
import ApplicationReducer from "./slices/Application";
import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "@entities/Product/api";

const store = configureStore({
    reducer: {
        application: ApplicationReducer,
        cart: CartReducer,
        market: MarketReducer,
        productApi: productApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(productApi.middleware),
});

export type TRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
