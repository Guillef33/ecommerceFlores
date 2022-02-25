import React, { useState, useContext, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

// import "./ItemDetail.scss";

import ItemCount from "./ItemCount";

import { CartContext } from "../../context/CartContext";

function ItemCard({ product }) {
  const { stars, count, setCount, showItem, addToCart } =
    useContext(CartContext);

  //Agregar el onAdd para subir al carrito

  const onAdd = (qty) => {
    console.log({ ...product, qty });
    addToCart({ ...product, qty });
  };

  return (
    <Card sx={{ maxWidth: 345 }} className="cards-container">
      <Link to={`/detalle/${product.id}`}>
        <CardMedia
          component="img"
          height="300"
          image={product.imageId}
          alt={product.id}
        />
      </Link>
      <CardContent className="cards-content-wrapper">
        <div className="price-flex">
          <Typography
            gutterBottom
            variant="h5"
            component="h5"
            className="card-title"
          >
            {product.title}
          </Typography>
          <Typography gutterBottom variant="h5" component="h5">
            ${product.price}
          </Typography>
        </div>
        <div className="price-container">
          <ItemCount onAdd={onAdd} initial={0} stock={5} />
        </div>
      </CardContent>
    </Card>
  );
}

export default ItemCard;
