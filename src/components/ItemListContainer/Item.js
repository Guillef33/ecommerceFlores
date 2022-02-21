import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ItemCount from "./ItemCount";

import "./ItemsListContainer.scss";

import { AppContext } from "../../context/AppContext";

const Item = ({ product }) => {
  const { products, setProducts, allProducts, addToCart } = useContext(AppContext);

  const onAdd = ( qty ) => {
    console.log({ ...product, qty })
    addToCart({ ...product, qty })
  }

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
          <ItemCount onAdd={onAdd} initial={0} stock={5}  />
        </div>
      </div>
    </div>
  );
};

export default Item;
