import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import "./count.scss";

import { Button } from "@mui/material";

import swal from "sweetalert";

import { CartContext } from "../../context/CartContext";

// import Modal from "../Modal/Modal";

const ItemCount = ({ onAdd, stock }) => {
  const { setAddToCart, isCartPage } = useContext(CartContext);

  const [count, setCount] = useState(0);

  // console.log(showModal);

  return (
    <div className={isCartPage ? "buy-container" : "buy-cart"}>
      <div className="contador-container">
        <Button
          variant="outlined"
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
        </Button>
        <input value={count} />
        <Button
          onClick={() => {
            if (count === stock) {
              swal({
                title: "Lo sentimos!",
                text: "No tenemos suficiente stock",
                icon: "warning",
                button: "Seguir comprando!",
              });
              setCount(stock);
            } else {
              setCount(count + 1);
            }
          }}
        >
          +
        </Button>
      </div>
      <Button
        variant="contained"
        onClick={() => {
          onAdd(count);
          swal({
            title: "Excelente!",
            text: "Producto agregado al carrito",
            icon: "success",
            button: "Seguir comprando!",
          });
        }}
        addToCart={setAddToCart}
      >
        Add To Cart
      </Button>
    </div>
  );
};

export default ItemCount;
