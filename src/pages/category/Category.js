import React, { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";

import "./category.scss";

import { CartContext } from "../../context/CartContext";

import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";
import { db } from "../firebase/config";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

function CategoryPage() {
  const { nameCategory } = useParams();

  const { firebaseProducts, setFirebaseProducts } = useContext(CartContext);

  // const [] = useState([]);

  useEffect(() => {
    const getJuegos = async () => {
      const q = query(
        collection(db, "products"),
        where("categoria", "==", nameCategory)
      );
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      console.log(docs);
      setFirebaseProducts(docs);
    };
    getJuegos();
  }, [nameCategory]);

  return (
    <section>
      <div className="category-title">
        <h2>Productos de la categoria: {nameCategory} </h2>
      </div>

      <div>
        {firebaseProducts.length ? (
          <ItemListContainer
            firebaseProducts={firebaseProducts}
            setFirebaseProducts={setFirebaseProducts}
          />
        ) : (
          <p>Loading</p>
        )}
      </div>
    </section>
  );
}

export default CategoryPage;
