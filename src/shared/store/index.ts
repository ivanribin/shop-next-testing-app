import {configureStore} from '@reduxjs/toolkit';
import {api} from '@shared/api';

import CartReducer from './slices/Cart';
import MarketReducer from './slices/Market';

const store = configureStore({
    reducer: {
        cart: CartReducer,
        market: MarketReducer,
        api: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(api.middleware),
});

export type TRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
