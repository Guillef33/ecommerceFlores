import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";

import "../../components/ItemListContainer/ItemsListContainer.scss";
import './home.scss';

import { FaAngleDown } from "react-icons/fa";

import Item from "../../components/ItemListContainer/Item";
import SideBar from "../../components/Sidebar/SideBar";
import Section from "../../components/ItemListContainer/Section";

const Home = ({ contador, setContador, initial, stock }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    allProducts();
  }, []);

  const allProducts = async () => {
    axios(`https://fakestoreapi.com/products/`).then((res) => {
      console.log(res);
      setProducts(res.data);
    });
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
              category="jewelery"
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
