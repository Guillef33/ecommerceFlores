import React from "react";

import "./ItemsListContainer.css";

import { products } from "./products";
import ItemCount from './ItemCount'

const ItemContainer = ( {contador, setContador, initial, stock}) => {

  console.log(contador)
  return (
    <>
      <div className="products-container">
        {products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <div className="card-header">
                <img src={product.image} alt="camisa" />
              </div>
              <div className="card-body">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <strong>${product.price}</strong>
                <ItemCount
                  contador={contador}
                  setContador={setContador}
                  initial={0}
                  stock={5}
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemContainer;
