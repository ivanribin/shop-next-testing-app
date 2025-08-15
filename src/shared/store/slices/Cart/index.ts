import {IProduct} from '@entities/Product';
import {PayloadAction, Slice, createSlice} from '@reduxjs/toolkit';

export interface ICartSlice {
    addedProducts: IProduct[];
    cost: number;
}

const initialState: ICartSlice = {
    addedProducts: [],
    cost: 0,
};

const cartSlice: Slice<ICartSlice> = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProduct>) => {
            state.addedProducts.push(action.payload);
            state.cost += action.payload.price;
        },
        removeProduct: (state, action: PayloadAction<number>) => {
            const removedProductIndex: number = state.addedProducts.findIndex(
                (product: IProduct) => product.id === action.payload,
            );

            if (removedProductIndex === -1) {
                return;
            }

            const removedProductPrice: number =
                state.addedProducts[removedProductIndex].price;

            state.addedProducts = state.addedProducts.filter(
                (product: IProduct) => product.id !== action.payload,
            );
            state.cost -= removedProductPrice;
        },
        clearCart: (state) => {
            state.addedProducts = [];
            state.cost = 0;
        },
    },
});

export const {addProduct, removeProduct} = cartSlice.actions;

export default cartSlice.reducer;
