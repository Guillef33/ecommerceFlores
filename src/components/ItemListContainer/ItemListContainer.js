import React, { useState, useEffect, useContext } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";

import "./ItemsListContainer.scss";

import { FaAngleDown } from "react-icons/fa";

import Item from "./Item";
import SideBar from "../Sidebar/SideBar";
import Section from "./Section";

import { AppContext } from "../../context/AppContext";

const ItemContainer = () => {

  const { products, setProducts, allProducts } = useContext(AppContext);

  return (
    <div className="home-container">
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
