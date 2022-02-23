import React, { useContext } from "react";
import "./CartWidget.scss";
import { FiShoppingCart } from "react-icons/fi";

import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  console.log(cart);

  return (
    <>
      <FiShoppingCart />
      <span className="cartBadge">{cart.length}</span>
    </>
  );
};

export default CartWidget;
