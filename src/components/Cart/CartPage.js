import React, { useContext } from "react";

import CartList from "./CartList";
import { Link } from "react-router-dom";

import "../../assets/scss/base.scss";

import { AppContext } from "../../context/AppContext";

function CartPage() {
  const {
    product,
    onAdd,
    addToCart,
    setAddToCart,
    addedToCart,
    setaddedToCart,
  } = useContext(AppContext);

  console.log(addedToCart);

  return (
    <section>
      <div className="base-layout">
        <h2>Tu carrito de compras</h2>
        <div className="table">
          {addedToCart ? (
            <>
              <CartList />
              <Link to={`/products/${product.id}`}>
                <button className="btn-comprar">Volver atras</button>
              </Link>
              <Link to="/checkout">
                <button
                  className="btn-comprar"
                  //  onClick={onAdd}
                >
                  Finalizar compra
                </button>
              </Link>
            </>
          ) : (
            <div>
              <p>El carrito esta vacio. vuelve atras y agrega mas productos</p>
              <Link to={`/`}>
                <button className="btn-comprar">Ir a comprar</button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default CartPage;
