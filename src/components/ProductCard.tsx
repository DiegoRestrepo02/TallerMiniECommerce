import React, { useState } from "react";
import { PropsProduct } from "../interfaces/propsProduct";

export const ProductCard = (infoProduct: PropsProduct) => {

    return(
        <>
        <article className="ProductCard">
            <div className="imageContainer">
                <img src={infoProduct.image} className="coverImage"/>
            </div>
            <div className="ProductInfo">
                <strong className="ProductTitle">{infoProduct.title}</strong>
                <span className="ProductPrice">{infoProduct.price}</span>
                <span className="ProductDescription">{infoProduct.description}</span>
                <span className="CategoryProduct">{infoProduct.category}</span>
            </div>
        </article>
        </>
    )

};