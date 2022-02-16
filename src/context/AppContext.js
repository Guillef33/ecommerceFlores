import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

function AppProvider(props) {
  const [products, setProducts] = useState([]);

  const [product, setProduct] = useState({});
  const [stars, setStars] = useState();

  const [addToCart, setAddToCart] = useState([]);
  const [showItem, setShowItem] = useState(true);

  const [addedToCart, setaddedToCart] = useState(false);

  const [showModal, setShowModal] = useState(false);

  const onAdd = (newProduct) => {
    if (!addToCart.length) {
      setAddToCart([newProduct]);
      setaddedToCart(true);

      setShowModal(true);
    } else {
    }
  };

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        onAdd,
        addToCart,
        setAddToCart,
        product,
        setProduct,
        stars,
        setStars,
        showItem,
        setShowItem,
        addedToCart,
        setaddedToCart,
        showModal,
        setShowModal,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
