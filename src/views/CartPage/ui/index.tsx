'use client';

import {type ReactElement} from 'react';

import {CheckoutForm} from '@features/CheckoutForm';
import {CartProductsList} from '@widgets/CartProductsList';

import './style.css';

const CartPage = (): ReactElement => {
    return (
        <div className="cart-page">
            <CartProductsList />
            <CheckoutForm />
        </div>
    );
};

export default CartPage;
