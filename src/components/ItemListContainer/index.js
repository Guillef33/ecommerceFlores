import React, {useState, useEffect} from "react";

import "./ItemsListContainer.css";

import { products } from "./products";
// import ItemCount from './ItemCount'
import Item from "./Item";

const ItemContainer = ({ contador, setContador, initial, stock }) => {


  const [fake, setFake] = useState([]);
  console.log(fake)

  useEffect ( () => {
    fakeStore();
  }, [])

  const fakeStore = async() => {
    
    const response = await fetch("https://fakestoreapi.com/products")
    const jsonData = await response.json();
    setFake(jsonData);
  }

  return (
    <div className="products-container">
      {fake.slice(0,6).map((fakes) => {
        return (
          <Item product={fakes} contador={contador} setContador={setContador} />
        );
      })}
    </div>
  );
};

export default ItemContainer;
