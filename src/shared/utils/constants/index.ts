import {IProduct} from '@entities/Product';

export interface IRouteData {
    id: string;
    path: string;
}

export const routesData = {
    MARKET: {
        id: 'market',
        path: '/market',
    },
    CART: {
        id: 'cart',
        path: '/cart',
    },
};

export const routesDataList: IRouteData[] = [
    {
        ...routesData.MARKET,
    },
    {
        ...routesData.CART,
    },
];

export const enum ApiEndpoints {
    PRODUCTS = 'products',
}

export const delay = async (timer: number): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, timer);
    });
};

export const isAddedToCart = (
    productId: number,
    addedProducts: IProduct[],
): boolean => {
    return (
        addedProducts.findIndex(
            (addedProduct: IProduct) => addedProduct.id === productId,
        ) !== -1
    );
};

console.log('CHECK 2');
