import {type ReactElement} from 'react';

import ProductSkeleton from '../ProductSkeleton';
import './style.css';

const PRODUCT_SKELETON_COUNT: number = 6;

const ProductsListSkeleton = (): ReactElement => {
    return (
        <div className="products-list">
            {Array.from({length: PRODUCT_SKELETON_COUNT}).map(
                (_, index: number) => (
                    <ProductSkeleton key={index} />
                ),
            )}
        </div>
    );
};

export default ProductsListSkeleton;
