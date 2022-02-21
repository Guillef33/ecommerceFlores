import React, { useContext } from "react";

import { TiDelete } from "react-icons/ti";

import { AppContext } from "../../context/AppContext";
import { CartContext } from "../../context/CartContext";

import "./cart.scss";


function CartItem( { product, deleteCartById }) {
  const { cart, count } = useContext(AppContext);
  // const { productCart, deleteCartById } = useContext(CartContext);

  // console.log(count);

  return (
    <article className="cart-item-card">
      <div
        className="cart-item__delete"
        // onClick={() => deleteCartById(product.id)}
        onClick={() => deleteCartById(product.id)}
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
        <strong>Cantidad:</strong> {product.qty}
      </span>
      <span className="cart-item__qty">
        <strong>Total:</strong> ${product.qty * product.price}
      </span>
    </article>
  );
}

export default CartItem;
