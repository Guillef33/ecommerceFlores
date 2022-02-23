import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import ItemDetailFB from "./ItemDetailFB";

import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "./config.js";

import { CartContext } from "../../context/CartContext";

function ItemDetailContainerFB() {
  const { firebaseProducts, setFirebaseProducts, stars } =
    useContext(CartContext);

  // const [juegoData, setJuegoData] = useState([]);

  console.log(firebaseProducts);

  // console.log('hola')

  const { id } = useParams();

  useEffect(() => {
    const getJuegos = async () => {
      const q = query(
        collection(db, "products"),
        where(documentId(), "==", id)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setFirebaseProducts(docs);
    };
    getJuegos();
  }, []);

  return (
    <>
      {firebaseProducts.map((product) => {
        return (
          <ItemDetailFB product={product} stars={stars} key={product.id} />
        );
      })}
    </>
  );
}
export default ItemDetailContainerFB;
