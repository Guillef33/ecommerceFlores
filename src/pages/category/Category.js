import React, { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";

import "./category.scss";

import { CartContext } from "../../context/CartContext";

import { Box, Skeleton } from "@mui/material";

import Header from "../../components/Header/Header";

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
      <Header
        title={"Productos de la categoria:"}
        nameCategory={nameCategory}
      />
      <div>
        {firebaseProducts.length ? (
          <ItemListContainer
            firebaseProducts={firebaseProducts}
            setFirebaseProducts={setFirebaseProducts}
          />
        ) : (
          <>
            <div className="products-container">
              <Skeleton variant="rectangular" width={400} height={400} />
              <Skeleton variant="rectangular" width={400} height={400} />
              <Skeleton variant="rectangular" width={400} height={400} />
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default CategoryPage;
