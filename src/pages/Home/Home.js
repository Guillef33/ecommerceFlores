import React, { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";

import axios from "axios";

import "../../components/ItemListContainer/ItemsListContainer.scss";
import './home.scss';

import Section from "../../components/ItemListContainer/Section";

import { AppContext } from "../../context/AppContext";

const Home = ( ) => {

    const { products, setProducts } = useContext(AppContext);

      useEffect(() => {
        allProducts();
      }, []);

      const allProducts = async () => {
        try {
          axios(`https://fakestoreapi.com/products/`).then((res) => {
            console.log(res);
            setProducts(res.data);
          });
        } catch (error) {
          console.log(error);
        }
      };


  return (
    <>
      <div className="header-home">{/* <h2>Bienvenido</h2> */}</div>
      <div className="product-container">
        <div className="category-title">
          <h2>New arrivals</h2>
        </div>

        <div>
          {products.length ? (
            <Section
              // category="jewelery"
              products={products}
              setProducts={setProducts}
            />
          ) : (
            <p>Loading</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
