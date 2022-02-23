import React, { useEffect, useState, useContext } from "react";
import ItemDetailFB from "./ItemDetailFB";
import { useParams } from "react-router-dom";

// import { AppContext } from "../../context/AppContext";

import { FaStar } from "react-icons/fa";
import { collection, query, where, getDocs } from "firebase/firestore";

import { CartContext } from "../../context/CartContext";


import { db } from "./config.js";

function ItemDetailContainerFB() {

  // const cartContext = useContext(CartContext);

    const {
      products,
      setProducts,
      firebaseProducts,
      setFirebaseProducts,
      stars,
    } = useContext(CartContext);

  const { id } = useParams();


   useEffect(() => {
     const getJuegos = async () => {
       const q = query(
         collection(db, "products")
           .doc(id)
           .get()
       );

      
       const docs = [];
       const querySnapshot = await getDocs(q);
       //   console.log(querySnapshot);
       querySnapshot.forEach((doc) => {
         // console.log(doc.id, " => ", doc.data());
         docs.push({ ...doc.data(), id: doc.id });
       });
       //   console.log(docs)
       setFirebaseProducts(docs);
     };
     getJuegos(id);
   }, []);

  return <ItemDetailFB firebaseProducts={firebaseProducts} stars={stars} />;
}
export default ItemDetailContainerFB;
