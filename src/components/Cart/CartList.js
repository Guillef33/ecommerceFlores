import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";

import CartItem from "./CartItem";

import "./cart.scss";

function CartList() {
  const { product, contador } = useContext(AppContext);

  console.log(product);
  console.log(contador);

  return (
    <div>
      <p className="carrito-text">
        <CartItem contador={contador} product={product} />
      </p>
    </div>
  );
}

export default CartList;
