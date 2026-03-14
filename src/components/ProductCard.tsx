import React, { useState } from "react";
import { PropsProduct } from "../interfaces/propsProduct";

interface listaProducts {
    infoProducts: PropsProduct[]
}

export const ProductCard = (infoProducts: listaProducts) => {
    const [cart, setCart] = useState<number[]>([]);

    const addToCart = (id: number) => {
        setCart(prevCart => [...prevCart, id]);
    };

    return (
        <>
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <h1>Total productos a comprar: {cart.length}</h1>
                    <h2>Id Productos:</h2>
                    <ul>{cart.map((cartProducto, index) => (
                        <li>
                            {cartProducto}
                        </li>
                    ))}</ul>
                </div>
            </div>
            <div className="row">
                {
                    infoProducts.infoProducts.map((product) => (
                        <div className="col-sm-12 col-md-4 col-lg-4 my-3">
                            <div className="card">
                                <img src={product.image} className="rounded mx-auto d-block tamanioImagenProduct py-3" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text fw-bold">${product.price}</p>
                                    <button onClick={() => addToCart(product.id)} className="btn btn-primary text-center w-100">¡Comprar!</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )

};