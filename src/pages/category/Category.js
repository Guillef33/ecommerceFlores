import React, { useState, useEffect, useContext } from "react";

import Section from "../../components/ItemListContainer/Section";

import './category.scss'

import { AppContext } from "../../context/AppContext";

function CatElectronicos() {

      const { products, setProducts, nameCategory } = useContext(AppContext);


  return (
    <section>
      <div className="category-title">
        <h2>Productos de la categoria: {nameCategory} </h2>
      </div>

      <div>{products.length ? <Section products={products} /> : <p>Loading</p>}</div>
    </section>
  );
}

export default CatElectronicos;
