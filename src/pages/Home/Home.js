import React, { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";

import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

import "../../components/ItemListContainer/ItemsListContainer.scss";
import "./home.scss";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

import { CartContext } from "../../context/CartContext";

import { Box, Skeleton } from "@mui/material";

import Carousel from "../../components/Carousel/Carousel";


const Home = () => {
  const { firebaseProducts, setFirebaseProducts, isLoading, setIsLoading } =
    useContext(CartContext);

  useEffect(() => {
    const getJuegos = async () => {
      const q = query(collection(db, "products"));
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
    getJuegos();
    // setTimeout(() => {
    //   setIsLoading(false);
    // }, 500);
  }, []);

  return (
    <>
      <Carousel />
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
    </>
  );
};

export default Home;
