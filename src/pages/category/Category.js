import React, { useState, useEffect, useContext} from "react";

import { useParams } from "react-router-dom";


import Section from "../../components/ItemListContainer/Section";

import "./category.scss";

import { AppContext } from "../../context/AppContext";

function CatElectronicos() {
  const { products, setProducts } = useContext(AppContext);

   const { nameCategory } = useParams();

   useEffect(() => {
     GetCategory(nameCategory);
   }, [nameCategory]);

   const GetCategory = async (nameCat) => {
     try {
       const response = await fetch(
         `https://fakestoreapi.com/products/category/${nameCat}`
       );
       const data = await response.json();
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

      <div>
        {products.length ? <Section products={products} /> : <p>Loading</p>}
      </div>
    </section>
  );
}

export default CatElectronicos;
