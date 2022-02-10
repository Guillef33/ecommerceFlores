import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./ItemDetail.scss";
import Rate from "./Rate";

import ItemCount from "../ItemListContainer/ItemCount";

function ItemDetail({ item, stars }) {
  const [contador, setContador] = useState(0);
  const [agregado, setAgregado] = useState();
  const [showItem, setShowItem] = useState(true);

  const onAdd = () => {
    setAgregado(item.id);
    setContador(contador);
    setShowItem(false);
    console.log("agregadas", contador, "unidades del producto ", item.title, item.id);
  };

  return (
    <div className="detail-container">
      <div className="detail-image">
        <img src={item.image} alt={item.id} className="image-detail" />
      </div>
      <div className="detail-content">
        <p className="detail-category">{item.category}</p>
        <h2>{item.title}</h2>
        <h4 className="detail-price">{item.price}</h4>
        <p>{item.description}</p>
        <div>{stars}</div>
        <div className="buy-actions">
          {showItem ? (
            <ItemCount
              initial={0}
              stock={5}
              onAdd={onAdd}
              contador={contador}
              setContador={setContador}
              setAgregado={setAgregado}
              agregado={agregado}
            />
          ) : (
            "Sigue comprando"
          )}
          <Link to="/cart">
            <button className="btn-comprar">Ir al carrito</button>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
