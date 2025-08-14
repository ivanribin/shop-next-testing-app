"use client";

import StripeCheckoutWrapper from "@widgets/CheckoutForm";
import CartProductsList from "@widgets/CartProductsList";
import { type ReactElement } from "react";
import "./style.css";

const CartPage = (): ReactElement => {
    return (
        <div className="cart-page">
            <CartProductsList />
            <StripeCheckoutWrapper />
        </div>
    );
};

export default CartPage;
