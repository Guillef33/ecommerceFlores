import React, { useState, useEffect } from "react";

import "./ItemsListContainer.css";

import { products } from "./products";
// import ItemCount from './ItemCount'
import Item from "./Item";
// import fakes from './fakes';

// const allCategories = ["all", ...new Set(fakes.map((fake) => fake.category))];

// console.log(fakes)

const ItemContainer = ({ contador, setContador, initial, stock }) => {
  const [fakes, setFakes] = useState([]);
  // const [categories, setCategories] = useState(allCategories);

  // console.log(fakes)

  // const filterItems = (categories) => {
  //   if (categories === "all") {
  //     setFakes(fakes);
  //     return;
  //   }
  //   const newItems = fakes.filter((fake) => fake.category === categories);
  //   setFakes(newItems);
  // };

  useEffect(() => {
    fakeStore();
  }, []);

  const fakeStore = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setFakes(data);
  };

  return (
    <div className="home-container">
      <div className="sidebar">
        <ul>
          <li>Jewelery</li>
          <li>Electronics</li>
          <li>Men</li>
          <li>Woman</li>
        </ul>
      </div>
      <div className="ecommerce-body">
        <section>
          <h2>New arrivals</h2>
          <div className="products-container">
            {fakes
              .slice(0, 16)
              .filter(
                (fake) =>
                  fake.category !== "jewelery" &&
                  fake.category !== "electronics"
              )
              .map((newest) => {
                return (
                  <Item
                    product={newest}
                    contador={contador}
                    setContador={setContador}
                  />
                );
              })}
            {/* { Queria agregar un skeletor y no estaba funcionando } */}
            {!fakes && <p>Loading...</p>}
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
      </div>
    </div>
  );
};

export default ItemContainer;
