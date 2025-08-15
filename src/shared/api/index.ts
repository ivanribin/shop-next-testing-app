import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_PRODUCT_BASE_API_URL,
});

export enum IApiTags {
    PRODUCTS = 'Products',
}

const apiTagsList: string[] = Object.values(IApiTags);

export const api = createApi({
    reducerPath: 'api',
    tagTypes: apiTagsList,
    baseQuery,
    endpoints: () => ({}),
});
