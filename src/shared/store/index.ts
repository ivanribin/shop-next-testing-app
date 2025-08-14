import {productApi} from '@entities/Product/api';
import {configureStore} from '@reduxjs/toolkit';

import CartReducer from './slices/Cart';
import MarketReducer from './slices/Market';

const store = configureStore({
    reducer: {
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
