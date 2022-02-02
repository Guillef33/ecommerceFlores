import React, {useState, useEffect} from "react";

import "./ItemsListContainer.css";

import { products } from "./products";
// import ItemCount from './ItemCount'
import Item from "./Item";

const ItemContainer = ({ contador, setContador, initial, stock }) => {


  const [fakes, setFakes] = useState([]);
  console.log(fakes)

  useEffect ( () => {
    fakeStore();
  }, [])

  const fakeStore = async() => {
    
    const response = await fetch("https://fakestoreapi.com/products")
    const jsonData = await response.json();
    setFakes(jsonData);
  }

  return (
    <>
      <section>
        <h2>New arrivals</h2>
        <div className="products-container">
          {fakes
            .slice(0, 16)
            .filter((fake) => fake.category !== "jewelery" && fake.category !== 'electronics')
            .map((newest) => {
              return (
                <Item
                  product={newest}
                  contador={contador}
                  setContador={setContador}
                />
              );
            })}
        </div>
      </section>
      <section>
        <h2>The best Jewelery in Town</h2>
        <div className="products-container">
          {fakes
            .slice(0, 6)
            .filter((fake) => fake.category === "jewelery")
            .map((filteredFake) => {
              return (
                <Item
                  product={filteredFake}
                  contador={contador}
                  setContador={setContador}
                />
              );
            })}
        </div>
      </section>
      <section>
        <h2>Electronics</h2>
        <div className="products-container">
          {fakes
            .filter((fake) => fake.category === "electronics")
            .map((electronics) => {
              return (
                <Item
                  product={electronics}
                  contador={contador}
                  setContador={setContador}
                />
              );
            })}
        </div>
      </section>
    </>
  );
};

export default ItemContainer;
