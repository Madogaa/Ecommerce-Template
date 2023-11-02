import React, { useEffect } from "react";
import { CartIcon } from "../../utils/Icons";
import { handleError } from "vue";
import { useCart } from "../../hooks/useCart";

function NavBar() {

    const { displayCart } = useCart()

    const handleCartOnClick = () => {
        displayCart(true)
    }

  return (
    <nav className="flex justify-between items-center pt-3">
      <ul className="flex gap-4 text-sm">
        <li>HOMBRE</li>
        <li>MUJER</li>
        <li>ACCESORIOS</li>
      </ul>
      <button onClick={handleCartOnClick} className=" p-2">
        <CartIcon />
      </button>
    </nav>
  );
}

export default NavBar;
