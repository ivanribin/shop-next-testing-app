import {type MouseEvent, type ReactElement, useState} from 'react';
import {useDispatch} from 'react-redux';

import {IProduct} from '@entities/Product';
import {ImageWithFallback} from '@shared/ImageWithFallback';
import {removeProduct} from '@shared/store/slices/Cart';
import {delay} from '@shared/utils/constants';

import './style.css';

export interface ICartProductInfoProps {
    product: IProduct;
}

const CartProductInfo = ({product}: ICartProductInfoProps): ReactElement => {
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    const dispatch = useDispatch();

    const handleClick = async (
        event: MouseEvent<HTMLButtonElement>,
    ): Promise<void> => {
        event.stopPropagation();

        setIsDeleting(true);

        await delay(2000);

        setIsDeleting(false);

        dispatch(removeProduct(product.id));
    };

    return (
        <button
            disabled={isDeleting}
            className="cart-product-info"
            onClick={handleClick}>
            <ImageWithFallback
                size={200}
                src={product.thumbnail}
                alt={`${product.title} ${product.id}`}
                disabled={isDeleting}
            />
            <h3>{product.title}</h3>
            <span>Price: ${product.price}</span>
        </button>
    );
};

export default CartProductInfo;
