import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import "./count.scss";

import { CartContext } from "../../context/CartContext";

import Modal from "../Modal/Modal";

const ItemCount = ({ onAdd, stock }) => {
  const { setAddToCart, showModal } = useContext(CartContext);

    const [count, setCount] = useState(0);

  // console.log(showModal);

  return (
    <div className="buy-container">
      <div className="contador-container">
        <p>Cantidad</p>
        <button
          onClick={() => {
            if (count === 0) {
              setCount(0);
            } else if (count === stock) {
              setCount(stock);
            } else {
              setCount(count - 1);
            }
          }}
        >
          -
        </button>
        <input value={count} />
        <button
          onClick={() => {
            if (count === stock) {
              alert("No tenemos mas stock de este producto");
              setCount(stock);
            } else {
              setCount(count + 1);
            }
          }}
        >
          +
        </button>
      </div>

      <button className="btn-comprar" onClick={()=>{ onAdd( count ) }} addToCart={setAddToCart}>
        Add to cart
      </button>
{/* 
      {showModal ? <Modal /> : ""} */}
    </div>
  );
};

export default ItemCount;
