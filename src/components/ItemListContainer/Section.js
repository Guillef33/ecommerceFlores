import React from "react";
import Item from "./Item";

import "./ItemsListContainer.scss";

function Section({
  products,
  setProducts,
  contador,
  setContador,
  category,
  setCategory,
}) {
  return (
    <div className="products-container">
      {products
        // .filter((product) => product.category === category)
        .map((product) => {
          return (
            <Item
              key={product.id}
              product={product}
              contador={contador}
              setContador={setContador}
            />
          );
        })}
    </div>
  );
}

export default Section;
