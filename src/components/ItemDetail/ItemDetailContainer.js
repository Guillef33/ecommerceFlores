import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { FaStar } from "react-icons/fa";


function ItemDetailContainer() {
  const [item, setItem] = useState({});
    const [stars, setStars] = useState();


  // useEffect(() => {
  //   let delayItemShow = setTimeout(() =>getItem(), 500);
  //   return () => clearTimeout(delayItemShow);
  // }, []);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/1`);
    const jsonData = await response.json();
    console.log(jsonData);
    console.log(jsonData.rating.rate)

    const productRate = Math.round(jsonData.rating.rate);
    console.log(productRate);
    setStars(
      [...Array(productRate)].map((elem, index) => (
        <FaStar key={index} className="detail-stars" />
      ))
    );
    setItem(jsonData);
  };

  return <ItemDetail item={item} stars={stars} />;
}

export default ItemDetailContainer;
