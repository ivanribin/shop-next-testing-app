import CartProductInfo from "@features/CartProductInfo";
import { type IProduct } from "@entities/Product/types";
import { useSelector } from "react-redux";
import { type ReactElement } from "react";
import { TRootState } from "@store/index";
import "./style.css";

const CartProductsList = (): ReactElement => {
    const addedProducts: IProduct[] = useSelector(
        (state: TRootState) => state.cart.addedProducts
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

export default CartProductsList
