import React, { useContext, useState } from "react";
import ItemFirebase from "./ItemFirebase";

import "./ItemsListContainer.scss";

import { CartContext } from "../../context/CartContext";

function ItemListContainer(
  // { firebaseProducts, setFirebaseProducts }
  ) {

    const { firebaseProducts, setFirebaseProducts } = useContext(CartContext);


  return (
    <div className="products-container">
      {firebaseProducts.map((product) => {
        return <ItemFirebase key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ItemListContainer;
