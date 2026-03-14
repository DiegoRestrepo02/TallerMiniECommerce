import React, { useState } from "react";
import { ProductCard } from './ProductCard';
import { getProducts } from '../helpers/getProducts';
import { PropsProduct } from "../interfaces/propsProduct";

export const ScreenProducts = () => {

    const [products, setProducts] = useState<PropsProduct[]>([]);

    getProducts().then((resolveData) => {
        if (resolveData != null) {
            const productsApi: PropsProduct[] = resolveData;
            setProducts(productsApi);
        }
    });

    return (
        <>
            {
                products.map((product) => (
                    <ProductCard id={product.id} title={product.title} price={product.price} description={product.description} image={product.image} category={product.category} />
                ))
            }
        </>
    )

};