import React from "react";

import CartList from "./CartList";
import { Link } from "react-router-dom";

import "../../scss/base.scss";

function Cart({ item, agregados, onAdd }) {
  // Aca necesito traer el item que fue agregado y la cantidad
  // console.log(item, agregados);

  return (
    <section>
      <div className="base-layout">
        <h2>Tu carrito de compras</h2>
      </div>
      <div className="table">
        {agregados ? (
          <CartList />
        ) : (
          "El carrito esta vacio. vuelve atras y agrega mas productos"
        )}
      </div>
      <Link to={`/products/${item.id}`}>
        <button className="btn-comprar">Volver atras</button>
      </Link>

      <Link to="/checkout">
        <button className="btn-comprar" onClick={onAdd}>
          Finalizar compra
        </button>
      </Link>
    </section>
  );
}

export default Cart;
