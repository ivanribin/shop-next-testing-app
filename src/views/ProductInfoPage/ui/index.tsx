'use client';

import {useParams} from 'next/navigation';

import {type ReactElement} from 'react';
import {useSelector} from 'react-redux';

import {IProduct} from '@entities/Product';
import {TRootState} from '@shared/store';
import {ProductInfo} from '@widgets/ProductInfo';

const ProductInfoPage = (): ReactElement => {
    const params = useParams<{id: string}>();

    const {id: currentProductId} = params;

    const loadedProducts: IProduct[] = useSelector(
        (state: TRootState) => state.market.loadedProducts,
    );

    const currentProduct: IProduct | undefined = loadedProducts.find(
        (loadedProduct: IProduct) =>
            loadedProduct.id === Number(currentProductId),
    );

    if (!currentProduct) {
        return <div>Product not found</div>;
    }

    return <ProductInfo product={currentProduct} />;
};

export default ProductInfoPage;
