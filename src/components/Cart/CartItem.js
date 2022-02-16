import React, { useContext } from "react";

import { TiDelete } from "react-icons/ti";

import { AppContext } from "../../context/AppContext";


function CartItem(
  ) {
  const { product, count } = useContext(AppContext);

  return (
    <article className="cart-item-card">
      <div
        className="cart-item__delete"
        //  onClick={() => deleteCartById(item.id)}
      >
        <TiDelete />
      </div>
      <div className="cart-item__img">
        <img
          src={product.image}
          alt="imagen pequena"
          style={{ width: "100px" }}
        />
      </div>
      <h2 className="cart-item__name">{product.title}</h2>
      <span className="cart-item__price">${product.price}</span>
      <span className="cart-item__qty">
        <strong>Cantidad:</strong> {count}
      </span>
      <span className="cart-item__qty">
        <strong>Total:</strong> ${count * product.price}
      </span>
    </article>
  );
}

export default CartItem;
