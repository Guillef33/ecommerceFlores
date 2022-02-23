import React, { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";

import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

import "../../components/ItemListContainer/ItemsListContainer.scss";
import "./home.scss";

import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

import { CartContext } from "../../context/CartContext";

const Home = () => {
  const { firebaseProducts, setFirebaseProducts } = useContext(CartContext);

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

  return (
    <>
      <div className="header-home">
        {/* <h2>Bienvenido</h2> */}
        <h2>Los mejores juegos para divertirse con amigos y familia</h2>
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
    </>
  );
};

export default Home;
