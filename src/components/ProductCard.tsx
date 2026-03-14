import React, { useState } from "react";

interface PropsProduct{
    idProduct: number, 
    titleProduct: string,
    priceProduct: number,
    descriptionProduct: string,
    categoryProduct: string,
    imageProduct: string
}
export const ProductCard = (infoProduct: PropsProduct) => {

    return(
        <>
        <article className="ProductCard">
            <div className="imageContainer">
                <img src={infoProduct.imageProduct} className="coverImage"/>
            </div>
            <div className="ProductInfo">
                <strong className="ProductTitle">{infoProduct.titleProduct}</strong>
                <span className="ProductPrice">{infoProduct.priceProduct}</span>
                <span className="ProductDescription">{infoProduct.descriptionProduct}</span>
                <span className="CategoryProduct">{infoProduct.categoryProduct}</span>
            </div>
        </article>
        </>
    )

};