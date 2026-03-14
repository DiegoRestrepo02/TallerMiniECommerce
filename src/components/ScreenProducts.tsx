import React, { useEffect, useState } from "react";
import { ProductCard } from './ProductCard';
import { getProducts } from '../helpers/getProducts';
import { PropsProduct } from "../interfaces/propsProduct";

export const ScreenProducts = () => {
    const [products, setProducts] = useState<PropsProduct[]>([]);
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string>("0");

    useEffect(() => {
        getProducts().then((data) => {
            if (data != null) {
                setProducts(data);

                const categoriasFinales: string[] = [];

                data.forEach(d => {
                    if (categoriasFinales.indexOf(d.category) == -1) {
                        categoriasFinales.push(d.category);
                    }
                });

                setCategories(categoriasFinales);
                console.log(categoriasFinales);
                console.log(categories);
            }
        })
    }, []);

    const productsMostrar = selectedCategory == "0" ? products : products.filter(p => p.category == selectedCategory);

    return (
        <>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className="form-floating mt-5">
                        <select className="form-select" id="floatingSelect" aria-label="Categorias" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                            <option value="0">Todas</option>
                            {categories.map((categoria, index) => (
                                <option key={index} value={categoria}>
                                    {categoria}
                                </option>
                            ))}
                        </select>
                        <label>Categorias</label>
                    </div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-sm-12 col-md-12 col-lg-12 text-center">
                    <h1>{selectedCategory == "0" ? "Todas las categorías" : selectedCategory}</h1>
                </div>
            </div>
            {
                <ProductCard infoProducts={productsMostrar} />
            }
        </>
    )

};