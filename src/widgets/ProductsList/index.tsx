import ProductCard from "@features/ProductCard";
import { useLoadProductsQuery } from "@entities/Product/api";
import { setProducts } from "@shared/store/slices/Market";
import { type IProduct } from "@entities/Product/types";
import { useEffect, type ReactElement } from "react";
import { useDispatch } from "react-redux";
import "./style.css";

const ProductsList = (): ReactElement => {
    const dispatch = useDispatch();

    const {data: loadedProductsResponse, error: loadingError, isLoading} = useLoadProductsQuery();

    const loadedProducts: IProduct[] | undefined = loadedProductsResponse?.products;

    useEffect(() => {
        if (!loadedProducts) {
            return;
        };

        dispatch(setProducts(loadedProducts));
    }, [loadedProducts, dispatch]);

    console.log(loadedProductsResponse, loadingError, isLoading);

    if (isLoading) {
        return <div>...Loading</div>
    };

    if (loadingError || !loadedProducts) {
        return <h1>{`Error: ${loadingError}`}</h1>
    }

    if (!loadedProducts.length) {
        return <div>Empty Market</div>
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
