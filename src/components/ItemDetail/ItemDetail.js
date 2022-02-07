import React from "react";

import "./ItemDetail.scss";
import Rate from "./Rate";

import ItemCount from "../ItemListContainer/ItemCount";

function ItemDetail({ item, stars }) {


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
        <ItemCount
          // contador={contador}
          // setContador={setContador}
          initial={0}
          stock={5}
        />
      </div>
    </div>
  );
}

export default ItemDetail;
