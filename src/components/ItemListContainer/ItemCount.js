import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import "./contador.scss";

import { AppContext } from "../../context/AppContext";

const ItemCount = ( ) => {
  const { product, showModal, stock, setShowItem, setShowModal, contador, setContador, setAddToCart, onAdd } =
    useContext(AppContext);



  return (
    <div className="buy-container">
      <div className="contador-container">
        <p>Cantidad</p>
        <button
          onClick={() => {
            if (contador === 0) {
              setContador(0);
            } else if (contador === stock) {
              setContador(stock);
            } else {
              setContador(contador - 1);
            }
          }}
        >
          -
        </button>
        <input value={contador} />
        <button
          onClick={() => {
            if (contador === stock) {
              alert("No tenemos mas stock de este producto");
              setContador(stock);
            } else {
              setContador(contador + 1);
            }
          }}
        >
          +
        </button>
      </div>

      <button className="btn-comprar" onClick={onAdd} agregado={setAddToCart}>
        Add to cart
      </button>
    </div>
  );
};

export default ItemCount;
