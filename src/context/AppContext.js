import React, { createContext, useState, useEffect } from "react";

import axios from "axios";

import { useParams } from "react-router-dom";

import { FaStar } from "react-icons/fa";

export const AppContext = createContext();

function AppProvider(props) {
  // products calls

  const [contador, setContador] = useState(0);
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({});
  const [stars, setStars] = useState();

  const [addToCart, setAddToCart] = useState();
  const [showItem, setShowItem] = useState(true);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    allProducts();
  }, []);

  const allProducts = async () => {
    try {
      axios(`https://fakestoreapi.com/products/`).then((res) => {
        console.log(res);
        setProducts(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  // category calls

  const { nameCategory } = useParams();

  useEffect(() => {
    GetCategory(nameCategory);
  }, [nameCategory]);

  const GetCategory = async (nameCat) => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${nameCat}`
      );
      const data = await response.json();
      // console.log("datos", data);
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Agregar al carrito

  const onAdd = (id) => {
    setAddToCart(product.id);
    setContador(contador);
    setShowItem(false);
    // setShowModal(true);
    // console.log(showModal);
    // // console.log(
    //   "agregadas",
    //   contador,
    //   "unidades del producto ",
    //   product.title,
    //   product.id
    // );
  };

  return (
    <AppContext.Provider
      value={{
        contador,
        setContador,
        products,
        setProducts,
        allProducts,
        onAdd,
        addToCart,
        setAddToCart,
        product,
        setProduct,
        stars,
        setStars,
        showItem,
        setShowItem,
        showModal,
        setShowModal,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
