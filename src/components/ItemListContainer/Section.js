import React, { useContext, useState } from "react";
import Item from "./Item";

import "./ItemsListContainer.scss";

import { AppContext } from "../../context/AppContext";

function Section() {
  const {
    products
  } = useContext(AppContext);

  return (
    <div className="products-container">
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            product={product}
          />
        );
      })}
    </div>
  );
}

export default Section;
