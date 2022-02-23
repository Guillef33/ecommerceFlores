import React, { useContext } from "react";
import { Link } from "react-router-dom";

import ItemCount from "./ItemCount";

import "./ItemsListContainer.scss";

import { CartContext } from "../../context/CartContext";

const ItemFirebase = ({ product }) => {
  const {
    firebaseProducts,
    setFirebaseProduces,
    addToCart,
  } = useContext(CartContext);

      // const [firebaseProducts, setFirebaseProduces] = useState([]);


  const onAdd = (qty) => {
    console.log({ ...product, qty });
    addToCart({ ...product, qty });
  };

  return (
    <div className="product-card" key={product.id}>
      <Link to={`/firebaseproducts/${product.id}`}>
        <div className="card-header">
          <img src={product.imageId} alt="camisa" />
        </div>
      </Link>
      <div className="card-body">
        <div>
          <p>{product.categoria}</p>
          <h4>${product.price}</h4>
          <h2 className="card-title">{product.title}</h2>
          <p>{product.description}</p>
        </div>
        <div>
          <ItemCount onAdd={onAdd} initial={0} stock={5} />
        </div>
      </div>
    </div>
  );
};

export default ItemFirebase;
