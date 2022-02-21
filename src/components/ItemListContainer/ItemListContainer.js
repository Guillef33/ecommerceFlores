import React, { useContext, useState } from "react";
import ItemFirebase from "./ItemFirebase";

import "./ItemsListContainer.scss";

import { AppContext } from "../../context/AppContext";

function ItemListContainer({ firebaseProducts, setFirebaseProducts }) {
  //   const { products } = useContext(AppContext);

  return (
    <div className="products-container">
      {firebaseProducts.map((product) => {
        return <ItemFirebase key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ItemListContainer;
