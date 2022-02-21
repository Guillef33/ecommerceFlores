import React, { useContext } from "react";
import "./CartWidget.scss";
import { FiShoppingCart } from "react-icons/fi";

import { AppContext } from "../../context/AppContext";

const CartWidget = () => {
  const { cart  } = useContext(AppContext);

  console.log(cart);

  return (
    <>
      <FiShoppingCart />
      <span className="cartBadge">{cart.length}</span>
    </>
  );
};

export default CartWidget;
