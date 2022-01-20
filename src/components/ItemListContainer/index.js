import React from "react";

import './ItemsListContainer.css'

const ItemContainer = ( props ) => {
  return (
    <>
      <h2> {props.greeting} </h2>
      <div className="products-container">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default ItemContainer;
