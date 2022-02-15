import React, { useContext } from "react";

import CartList from "./CartList";
import { Link } from "react-router-dom";

import "../../scss/base.scss";

import { AppContext } from "../../context/AppContext";




function Cart( ) {

  const {product, item, stars, showItem, onAdd, contador, setContador, agregado, setAgregado} = useContext(AppContext);


  return (
    <section>
      <div className="base-layout">
        <h2>Tu carrito de compras</h2>
        <div className="table">
          <CartList />
          {/* {agregado ? (
          <CartList />
        ) : (
          "El carrito esta vacio. vuelve atras y agrega mas productos"
        )} */}
        </div>
        <Link to={`/products/${product.id}`}>
          <button className="btn-comprar">Volver atras</button>
        </Link>

        <Link to="/checkout">
          <button className="btn-comprar" onClick={onAdd}>
            Finalizar compra
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Cart;
