import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext();

function AppProvider(props) {
  // Todos los productos
  const [products, setProducts] = useState([]);
  // Producto individual para la pagina de detail
  const [product, setProduct] = useState({});
  // Estrellas para la pagina de detail
  const [stars, setStars] = useState();
  // esta no me acuerdo para que funcionaba, esta en itemDetail
  const [showItem, setShowItem] = useState(true);
  // productos que se agregan al carrito
  const [cart, setCart] = useState([]);
  // const [showModal, setShowModal] = useState(false);
  // productos que vienen de Firebase
  const [firebaseProducts, setFirebaseProduces] = useState([]);

  const addToCart = (newProduct) => {
    console.log(newProduct);

    if (!cart.length) {
      setCart([newProduct]);
    } else {
      // Preguntas si existe en el carrito un producto que tenga el mismo id que el que se va a agregar
      if (cart.some((el) => el.id === newProduct.id)) {
        // crear una variable index que se corresponde a la posicion del producto que ya esta en el carrito
        let index = cart.findIndex((el) => el.id === newProduct.id);
        // en product guardamos la referencia a ese producto guardado del carrito (index)
        let product = cart[index];
        // Solo modifico la cantidad de ese producto
        product.qty = cart.qty + newProduct.qty;
        const newCart = [...cart];
        newCart.splice(index, 1, product);
        setCart([...newCart]);
      } else {
        setCart([...cart, newProduct]);
      }
    } 
  };

  const deleteCartById = (id) => {
    console.log("Click");
    const newCart = [...cart];
    let index = newCart.findIndex((el) => el.id === id);

    newCart.splice(index, 1);

    setCart([...newCart]);
  };

  const deleteCart = () => {
    setCart([]);
  };

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        addToCart, //función para agregar items al carrito
        product,
        setProduct,
        stars,
        setStars,
        showItem,
        setShowItem,
        cart,
        setCart,
        // showModal,
        // setShowModal,
        firebaseProducts,
        setFirebaseProduces,
        deleteCartById,
        deleteCart,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
