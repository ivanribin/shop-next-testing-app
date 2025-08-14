import {type ReactElement, useEffect} from 'react';
import {useDispatch} from 'react-redux';

import {IProduct, useLoadProductsQuery} from '@entities/Product';
import {ProductCard} from '@features/ProductCard';
import {ProductsListSkeleton} from '@shared/ProductsListSkeleton';
import {setProducts} from '@shared/store/slices/Market';

import './style.css';

const ProductsList = (): ReactElement => {
    const dispatch = useDispatch();

    const {
        data: loadedProductsResponse,
        error: loadingError,
        isLoading,
    } = useLoadProductsQuery();

    const loadedProducts: IProduct[] | undefined =
        loadedProductsResponse?.products;

    useEffect(() => {
        if (!loadedProducts) {
            return;
        }

        dispatch(setProducts(loadedProducts));
    }, [loadedProducts, dispatch]);

    if (isLoading) {
        return <ProductsListSkeleton />;
    }

    if (loadingError || !loadedProducts) {
        return <h1>{`Error: ${loadingError}`}</h1>;
    }

    if (!loadedProducts.length) {
        return <div>Empty Market</div>;
    }

    return (
        <div className="products-list">
            {loadedProducts.map((product: IProduct) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default ProductsList;
