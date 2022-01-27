import React from 'react'

import ItemCount from './ItemCount';

import './ItemsListContainer.css'

const Item = ( {product, contador, setContador} ) => {
    return (
      <div className="product-card" key={product.id}>
        <div className="card-header">
          <img src={product.image} alt="camisa" />
        </div>
        <div className="card-body">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <strong>${product.price}</strong>
          <ItemCount
            contador={contador}
            setContador={setContador}
            initial={0}
            stock={5}
          />
        </div>
      </div>
    );
}

export default Item;