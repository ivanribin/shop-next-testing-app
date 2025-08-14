import {type ReactElement} from 'react';
import {useSelector} from 'react-redux';

import {IProduct} from '@entities/Product';
import {CartProductInfo} from '@features/CartProductInfo';
import {TRootState} from '@shared/store';

import './style.css';

const CartProductsList = (): ReactElement => {
    const addedProducts: IProduct[] = useSelector(
        (state: TRootState) => state.cart.addedProducts,
    );

    if (!addedProducts.length) {
        return <h1>Cart is empty</h1>;
    }

    return (
        <div className="cart-products-list">
            {addedProducts.map((product: IProduct) => (
                <CartProductInfo key={product.id} product={product} />
            ))}
        </div>
    );
};

export default CartProductsList;
