import React, { useContext } from "react";
import Item from "./Item";

import "./ItemsListContainer.scss";

import { AppContext } from "../../context/AppContext";


function Section() {

  const { products, setProducts, contador, setContador, category, setCategory } = useContext(AppContext);

  return (
    <div className="products-container">
      {products
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
