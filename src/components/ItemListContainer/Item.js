import React from "react";

import ItemCount from "./ItemCount";

import "./ItemsListContainer.css";

const Item = ({ product, contador, setContador }) => {
  return (
    <div className="product-card" key={product.id}>
      <div className="card-header">
        <img src={product.image} alt="camisa" />
      </div>
      <div className="card-body">
        <div>
          <h4>${product.price}</h4>
          <h2 className="card-title">{product.title}</h2>
        </div>
        <div>
          <ItemCount
            contador={contador}
            setContador={setContador}
            initial={0}
            stock={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Item;
