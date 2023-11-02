import React from "react";
import { useCart } from "../../hooks/useCart";
import CartProduct from "./CartProduct";
import {CrossIcon} from '../../utils/Icons'
import "./Cart.css";

function Cart() {
  const { cart, displayCart } = useCart();

  const handleCloseOnClick = () => displayCart(false);

  return (
    <aside
      role="dialog"
      className={`${
        cart.isOpen ? "" : "cart--transform"
      } cart fixed h-screen w-96 bg-white top-0 right-0 p-4 text-left flex flex-col`}
    >
      <button
        className="absolute top-5 right-8 py-1 px-2 z-50"
        onClick={handleCloseOnClick}
      >
        <CrossIcon />
      </button>

      <div className="top-cart grow px-6 overflow-y-scroll">
        <h4 className="sticky top-0 bg-white text-2xl pt-14 pb-2 mb-6">
          <span className="semibold">Cesta </span>
          <small>({cart.products.length})</small>
        </h4>
        <div className="cart-items">
        {cart.products.map((product) => (
          <CartProduct product={product} key={product.id} />
        ))}
      </div>
      </div>



      <div className="button-cart mt-3">
          <div className="sub-total flex justify-between">
            <p>Subtotal</p>
            <span className="semibold">
              {cart.totalPrice} $
            </span>
          </div>
          <div className="transport-price flex justify-between">
            <p>Gastos de envio</p>
            <span className="semibold text-green-400">
              GRATIS
            </span>
          </div>
          <div className="total-price flex justify-between text-lg mt-4 mb-2">
            <p>Total</p>
            <span className="bold">
              {cart.totalPrice} $
            </span>
          </div>
          <button className="bg-green-400 py-3 w-full text-white semibold">
            TRAMITAR PEDIDO
          </button>
      </div>
    </aside>
  );
}

export default Cart;
