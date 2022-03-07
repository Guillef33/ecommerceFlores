import React, { useContext, useReducer } from "react";

import CartItem from "./CartItem";
import { Link } from "react-router-dom";

import { Button } from "@mui/material";
import "./cart.scss";

import { CartContext } from "../../context/CartContext";

import Checkout from "../checkout/Checkout";
import Login from "../Login/Login";
import Register from "../Login/Register";


function CartPage() {
  const { cart, deleteCartById, deleteCart, total } = useContext(CartContext);

  return (
    <section className="section-cart">
      <div className="cart-container">
        <h2>Tu carrito de compras</h2>
        <div className="cart-details">
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
            <>
              <Button variant="outlined" onClick={deleteCart}>
                {" "}
                Vaciar Carrito
              </Button>
              <Link to="/checkout">
                <Button variant="outlined">Finalizar Compra</Button>
              </Link>
            </>
          ) : (
            <p>No hay productos en el carrito</p>
          )}
        </div>
      </div>
      <div>
        {/* <Register /> */}
        {/* <Login /> */}
        <Checkout />
      </div>
    </section>
  );
}

export default CartPage;
