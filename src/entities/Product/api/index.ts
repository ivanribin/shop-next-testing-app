import {type IProduct} from '@entities/Product/types/';
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ApiEndpoints} from '@shared/utils/constants';

export interface ILoadProductsResponse {
    products: IProduct[];
}

export const productApi = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_PRODUCT_BASE_API_URL,
    }),
    endpoints: (builder) => ({
        loadProducts: builder.query<ILoadProductsResponse, void>({
            query: () => ApiEndpoints.PRODUCTS,
        }),
    }),
});

export const {useLoadProductsQuery} = productApi;
