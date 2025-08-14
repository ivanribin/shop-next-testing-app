import type { IProduct } from "@entities/Product/types";
import { createSlice, type PayloadAction, type Slice } from "@reduxjs/toolkit";

export interface IMarketSlice {
    loadedProducts: IProduct[];
}

const initialState: IMarketSlice = {
    loadedProducts: [],
};

const marketSlice: Slice<IMarketSlice> = createSlice({
    name: "market",
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<IProduct[]>) => {
            state.loadedProducts = action.payload;
        },
    },
});

export const { setProducts } = marketSlice.actions;

export default marketSlice.reducer;
