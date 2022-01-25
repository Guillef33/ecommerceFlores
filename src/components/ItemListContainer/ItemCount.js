import React, { useState } from "react";

import "./contador.css";

const ItemCount = ({ stock, initial }) => {
  const [contador, setContador] = useState(initial);

  // const [stock, setStock] = useState(20);

  const onAdd = () => {
    return alert(`Deseas agregar al carrito, ${contador} unidades?`);
  };

  return (
    <div className="buy-container">
      <div className="contador-container">
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
      <div>
        <button className="btn-comprar" onClick={onAdd}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
