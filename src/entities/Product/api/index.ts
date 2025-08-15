import {type IProduct} from '@entities/Product/types/';
import {api} from '@shared/api';
import {ApiEndpoints} from '@shared/utils/constants';

export interface ILoadProductsResponse {
    products: IProduct[];
}

export const productApi = api.injectEndpoints({
    endpoints: (builder) => ({
        loadProducts: builder.query<ILoadProductsResponse, void>({
            query: () => ApiEndpoints.PRODUCTS,
        }),
    }),
    overrideExisting: false,
});

export const {useLoadProductsQuery} = productApi;
