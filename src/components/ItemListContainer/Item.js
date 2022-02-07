import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ItemCount from "./ItemCount";

import "./ItemsListContainer.scss";

const Item = ({ product, contador, setContador }) => {
  
  return (
    <div className="product-card" key={product.id}>
      <Link to={`/products/${product.id}`}>
        <div className="card-header">
          <img src={product.image} alt="camisa" />
        </div>
      </Link>
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
