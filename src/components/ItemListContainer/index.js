import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";

import "./ItemsListContainer.scss";

import { FaAngleDown } from "react-icons/fa";

import Item from "./Item";
import SideBar from "../Sidebar/SideBar";
import Section from "./Section";

const ItemContainer = ({ contador, setContador, initial, stock }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    allProducts();
  }, []);

  const allProducts = async () => {
    axios(`https://fakestoreapi.com/products/`).then(
      (res) => {
        console.log(res)
        setProducts(res.data);
      }
    );
  };


  return (
    <div className="home-container">
      {/* <div className="sidebar">
        {/* <SideBar
          // products={products}
          // setProducts={setProducts}
          // category={category}
        /> */}

      <div className="ecommerce-body">
        <section>
          <h2>The best Jewelery in Town</h2>
          <Section
            category="jewelery"
            products={products}
            setProducts={setProducts}
          />
        </section>
        <section>
          <h2>Electronics</h2>
          <Section
            category="electronics"
            products={products}
            setProducts={setProducts}
          />
        </section>
      </div>
    </div>
  );
};

export default ItemContainer;
