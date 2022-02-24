import React, { useContext, useReducer } from "react";

import CartItem from "./CartItem";
import { Link } from "react-router-dom";

// import "../../assets/scss/base.scss";
import "./cart.scss";

import { CartContext } from "../../context/CartContext";

function CartPage() {
  const { cart, deleteCartById, deleteCart, total } =
    useContext(CartContext);

  // const [state, dispatch] = useReducer(shoppingReducer, initialState, init)

  console.log(cart);

  


  return (
    <section>
      <div className="cart-container">
        <h2>Tu carrito de compras</h2>
        <div className="table">
          <h2>Total: {total}</h2>
          {cart ? (
            cart.map((producto) => {
              return (
                <>
                  <CartItem
                    key={producto.id}
                    product={producto}
                    deleteCartById={deleteCartById}
                  />
                </>
              );
            })
          ) : (
            <p>Cargando productos</p>
          )}

          {cart ? (
            <button className="btn-comprar" onClick={deleteCart}>
              Vaciar Carrito
            </button>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>
        <div className="bottom-cart">
          <Link to="/checkout">
            <button
              className="btn-comprar"
              //  onClick={onAdd}
            >
              Finalizar compra
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CartPage;
