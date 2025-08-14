"use client";

import ProductInfo from "@widgets/ProductInfo";
import { type IProduct } from "@entities/Product/types";
import { useParams } from "next/navigation";
import { type ReactElement } from "react";
import { useSelector } from "react-redux";
import { TRootState } from "@shared/store";

const ProductInfoPage = (): ReactElement => {
    const params = useParams<{ id: string }>();

    const { id: currentProductId } = params;

    const loadedProducts: IProduct[] = useSelector(
        (state: TRootState) => state.market.loadedProducts
    );

    const currentProduct: IProduct | undefined = loadedProducts.find(
        (loadedProduct: IProduct) =>
            loadedProduct.id === Number(currentProductId)
    );

    if (!currentProduct) {
        return <div>Product not found</div>;
    }

    return <ProductInfo product={currentProduct} />;
};

export default ProductInfoPage;
