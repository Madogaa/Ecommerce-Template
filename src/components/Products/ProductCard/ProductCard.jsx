/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import { useCart } from "../../../hooks/useCart";
import CombinationsContainer from "./CombinationsContainer/CombinationsContainer";
import "./ProductCard.css";
import { LikeIcon } from "../../../utils/Icons";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleOnProductClick = (combination) => {
    const cartProduct = {
      ...product,
      combinations: combination,
    };
    addToCart(cartProduct);
  };

  const handleDetailOnClick = () => {
    navigate(`/detail/${product.id}`)
  }

  return (
    <article className="product">
      <div className="product-serve border border-gray-200">
        <button onClick={handleDetailOnClick} className="product-image">
          <img className="" src={product.image} alt={product.title} />
        </button>
        <CombinationsContainer
          onProductClick={handleOnProductClick}
          combinations={product.combinations}
        />
      </div>
      <div className="product-detail text-left p-2">
        <div className="flex justify-between">
          <h3 className="text-sm">{product.title}</h3>
          <button>
            <LikeIcon />
          </button>
        </div>
        <p className="bold">{product.price} €</p>
      </div>
    </article>
  );
}

export default ProductCard;
