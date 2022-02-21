import React, { useEffect, useState, useContext } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

import axios from "axios";

import { AppContext } from "../../context/AppContext";

import { FaStar } from "react-icons/fa";

function ItemDetailContainer() {

  const appContext = useContext(AppContext);

  const { product, stars, setProduct, setStars } = appContext;

  const { id } = useParams();

  useEffect(() => {
    getItem(id);
  }, []);

  const getItem = () => {
    try {
      axios(`https://fakestoreapi.com/products/${id}`).then((res) => {
        const productRate = Math.round(res.data.rating.rate);
        // console.log(productRate);
        setStars(
          [...Array(productRate)].map((elem, index) => (
            <FaStar key={index} className="detail-stars" />
          ))
        );
        setProduct(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  return <ItemDetail 
  product={product} stars={stars}
   />;
}
export default ItemDetailContainer;
