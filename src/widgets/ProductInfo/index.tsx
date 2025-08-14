import Image from "next/image";
import { type ReactElement, type MouseEvent, useState } from "react";
import { addProduct, removeProduct } from "@shared/store/slices/Cart";
import { delay, isAddedToCart } from "@utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "@entities/Product/types";
import { TRootState } from "@shared/store";
import "./style.css";

export interface IProductInfoProps {
    product: IProduct;
}

const ProductInfo = ({ product }: IProductInfoProps): ReactElement => {
    const [isCartStatusToggling, setIsCartStatusToggling] =
        useState<boolean>(false);

    const dispatch = useDispatch();

    const addedProducts: IProduct[] = useSelector(
        (state: TRootState) => state.cart.addedProducts
    );

    if (!product) {
        return <div>Product not found</div>;
    }

    const isProductAddedToCart = isAddedToCart(product.id, addedProducts);

    const toggleInCartAdding = async (
        event: MouseEvent<HTMLButtonElement>
    ): Promise<void> => {
        event.stopPropagation();

        setIsCartStatusToggling(true);

        await delay(2000);

        setIsCartStatusToggling(false);

        if (!isProductAddedToCart) {
            dispatch(addProduct(product));

            return;
        }

        dispatch(removeProduct(product.id));
    };

    const inCartToggleButtonLabel: string = !isProductAddedToCart
        ? "Add to cart"
        : "Remove from cart";

    return (
        <div className={`product-info-card`}>
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
                    {product.images.map((imageSrc: string, index: number) => (
                        <Image
                            key={index}
                            src={imageSrc}
                            alt={`${product.title} ${index}`}
                            width={80}
                            height={80}
                        />
                    ))}
                </div>
            )}
            <button
                style={{
                    backgroundColor: !isProductAddedToCart ? "green" : "red",
                }}
                onClick={toggleInCartAdding}
                disabled={isCartStatusToggling}
            >
                {inCartToggleButtonLabel}
            </button>
        </div>
    );
};

export default ProductInfo;
