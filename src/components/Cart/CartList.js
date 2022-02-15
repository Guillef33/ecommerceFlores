import React, { useContext } from "react";

import { AppContext } from "../../context/AppContext";

import './cart.css'

function CartList() {
  const {
    product,
  contador,
  } = useContext(AppContext);

  console.log(product)
  console.log(contador)

  return (
    <div>
      <p className="carrito-text">
        `agregadas {contador} "unidades del producto " {product.title}`
      </p>
    </div>
  );
}

export default CartList;
