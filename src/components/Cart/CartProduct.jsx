/* eslint-disable react/prop-types */
import React from "react";
import {EditCartIcon, RemoveFromCartIcon} from '../../utils/Icons'
import { useCart } from "../../hooks/useCart";


function CartProduct({ product }) {
  const { removeFromCart } = useCart();
  const handleDeleteOnClick = () =>{
    removeFromCart(product)
  }

  return (
    <div className="cart-item flex gap-3">
      <div className="shrink-0 w-28">
        <img className="w-full" src={product.image} alt={product.title} />
      </div>
      <div className="grow">
        <div className="top-area flex justify-between items-center w-full">
          <span className="semibold">{product.price * product.quantity} €</span>
          <div className="flex gap-2 editable-area">
            <button className="px-1"><EditCartIcon /></button>
            <button onClick={handleDeleteOnClick} className="px-1"><RemoveFromCartIcon /></button>
          </div>
        </div>
        <h3 className="text-xs">{product.title}</h3>
        <div className="flex justify-between text-sm  text-gray-400">
          {product.combinations && (
            <span className="">{product.combinations}</span>
          )}
          <div className="quantity flex gap-3 semibold">
            <span>{product.quantity}x</span>
            <span>{product.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartProduct;
