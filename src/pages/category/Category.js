import React, { useState, useEffect, useContext} from "react";

import { useParams } from "react-router-dom";

import "./category.scss";

import { CartContext } from "../../context/CartContext";

function CatElectronicos() {
  const { products, setProducts } = useContext(CartContext);

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
        {/* {products.length ? <Section products={products} /> : <p>Loading</p>} */}
      </div>
    </section>
  );
}

export default CatElectronicos;
