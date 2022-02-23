import React, { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import "../../components/ItemListContainer/ItemsListContainer.scss";
import "./home.scss";

import Section from "../../components/ItemListContainer/Section";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

import { AppContext } from "../../context/AppContext";
import { CartContext } from "../../context/CartContext";

const Home = () => {
  const { products, setProducts } =
    useContext(AppContext);

    const [firebaseProducts, setFirebaseProducts] = useState( [] );
 
  // FireBaseProducts
  // const ppContext = useContext(AppContext);
  // const [] = useState([]);

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
  }, []);

  // useEffect(() => {
  //   allProducts();
  // }, []);

  // const allProducts = async () => {
  //   try {
  //     axios(`https://fakestoreapi.com/products/`).then((res) => {
  //       console.log(res);
  //       setProducts(res.data);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <div className="header-home">
        {/* <h2>Bienvenido</h2> */}
        <h2>Los mejores juegos para divertirse con amigos y familia</h2>
      </div>
      {/* <div className="product-container">
        {products.length ? (
          <Section
            // category="jewelery"
            products={products}
            setProducts={setProducts}
          />
        ) : (
          <p>Loading</p>
        )}
      </div> */}
      <div>
        {firebaseProducts.length ? (
          <ItemListContainer
            // category="jewelery"
            firebaseProducts={firebaseProducts}
            setFirebaseProducts={setFirebaseProducts}
          />
        ) : (
          <p>Loading</p>
        )}
      </div>
    </>
  );
};

export default Home;
