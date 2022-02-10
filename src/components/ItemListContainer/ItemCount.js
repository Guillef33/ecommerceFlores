import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./contador.scss";

const ItemCount = ({ stock, initial, onAdd, contador, setContador, agregado, setAgregado}) => {


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

      <button className="btn-comprar" onClick={onAdd} agregado={setAgregado}>
        Add to cart
      </button>
    </div>
  );
};

export default ItemCount;
