import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import axios from "axios";

function ItemDetailContainer() {
  const [item, setItem] = useState({});
  const [stars, setStars] = useState();

  const { id } = useParams();


  useEffect(() => {
    getItem(id);
  }, [  ])


  const getItem = () => {
      axios(`https://fakestoreapi.com/products/${id}`).then((res) => {
        const productRate = Math.round(res.data.rating.rate);
        console.log(productRate);
        setStars(
          [...Array(productRate)].map((elem, index) => (
            <FaStar key={index} className="detail-stars" />
          ))
        );
        setItem(res.data);
      });
  }

  return (
     <ItemDetail item={item} stars={stars}  /> 
  )
}
export default ItemDetailContainer;
