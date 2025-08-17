import Image from 'next/image';
import {useRouter} from 'next/navigation';

import {MouseEvent, type ReactElement} from 'react';
import {useSelector} from 'react-redux';

import {IProduct} from '@entities/Product';
import {ImageWithFallback} from '@shared/ImageWithFallback';
import {TRootState} from '@shared/store';
import {isAddedToCart, routesData} from '@shared/utils/constants';

import './style.css';

export interface IProductCardProps {
    product: IProduct;
}

const ProductCard = ({product}: IProductCardProps): ReactElement => {
    const router = useRouter();

    const addedProducts: IProduct[] = useSelector(
        (state: TRootState) => state.cart.addedProducts,
    );

    const addedTypeClassname: string = !isAddedToCart(product.id, addedProducts)
        ? ''
        : 'added';

    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
        event.stopPropagation();

        router.push(`${routesData.MARKET.path}/${product.id}`);
    };

    return (
        <button
            className={`product-card ${addedTypeClassname}`}
            onClick={handleClick}>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="product-info">
                <span>Price: ${product.price}</span>
                <span>Discount: {product.discountPercentage}%</span>
                <span>Rating: {product.rating} ⭐</span>
                <span>Stock: {product.stock}</span>
            </div>
            <div className="product-meta">
                <span>Brand: {product.brand}</span>
                <span>Category: {product.category}</span>
            </div>
            {product.images.length > 0 && (
                <div className="product-images">
                    {product.images.map((imageSrc, index: number) => (
                        <ImageWithFallback
                            key={index}
                            src={imageSrc}
                            alt={`${product.title} ${index}`}
                            size={80}
                        />
                    ))}
                </div>
            )}
        </button>
    );
};

export default ProductCard;
