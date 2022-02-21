import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import "./ItemDetail.scss";

import ItemCount from "../ItemListContainer/ItemCount";

import { AppContext } from "../../context/AppContext";

function ItemDetail({ product }) {
  const { 
    stars,
    count,
    setCount,
    showItem,
    addToCart
  } = useContext(AppContext);

  //Agregar el onAdd para subir al carrito

   const onAdd = (qty) => {
     console.log({ ...product, qty });
     addToCart({ ...product, qty });
   };


  return (
    <div className="detail-container">
      <div className="detail-image">
        <img src={product.image} alt={product.id} className="image-detail" />
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
            <button className="btn-comprar">Ir al carrito</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;