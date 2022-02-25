import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import "./ItemDetail.scss";

import ItemCount from "../ItemListContainer/ItemCount";

import { Button } from "@mui/material";

import { CartContext } from "../../context/CartContext";

function ItemDetail({ product }) {
  const {
    stars,
    setCount,
    showItem,
    addToCart,
    setIsCartPage,
  } = useContext(CartContext);

  const onAdd = (qty) => {
    console.log({ ...product, qty });
    addToCart({ ...product, qty });
  };

  useEffect(() => {
    return () => {
      setIsCartPage(true);
    };
  }, []);

  return (
    <div className="detail-container">
      <div className="detail-image">
        <img src={product.imageId} alt={product.id} className="image-detail" />
      </div>
      <div className="detail-content">
        <p className="detail-category">{product.category}</p>
        <h2>{product.title}</h2>
        <h4 className="detail-price">{product.price}</h4>
        <p>{product.description}</p>
        <div>{stars}</div>
        <div className="buy-actions">
          {showItem ? (
            <ItemCount
              initial={0}
              stock={5}
              onAdd={onAdd}
              setCount={setCount}
            />
          ) : (
            "Sigue comprando"
          )}
          <Link to="/cart">
            <Button variant="outlined"> Ir al carrito </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
