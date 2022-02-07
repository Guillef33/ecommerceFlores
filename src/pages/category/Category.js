import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Section from "../../components/ItemListContainer/Section";

import './category.scss'

function CatElectronicos() {
  const [products, setProducts] = useState([]);

  const { nameCategory } = useParams();
  // console.log("esta es la categoria", nameCategory);

  useEffect(() => {
    fakeStore(nameCategory);
  }, [ nameCategory ]); //Cada vez que nameCategory cambia, disparo el useEffect

  const fakeStore = async (nameCat) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${nameCat}`
      );
      const data = await response.json();
      // console.log("datos", data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

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
