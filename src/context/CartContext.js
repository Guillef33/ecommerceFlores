import React, { useState, createContext } from "react";

import swal from "sweetalert";

export const CartContext = createContext(null);

const CartProvider = (props) => {
  // Producto individual para la pagina de detail
  const [product, setProduct] = useState({});
  // Estrellas para la pagina de detail
  // const [stars, setStars] = useState();

  const [showItem, setShowItem] = useState(true);

  const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);
  const [firebaseProducts, setFirebaseProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isCartPage, setIsCartPage] = useState(false);

  const addToCart = (newProduct) => {
    console.log(newProduct);

    if (!cart.length) {
      setCart([newProduct]);
    } else {
      if (cart.some((el) => el.id === newProduct.id)) {
        let index = cart.findIndex((el) => el.id === newProduct.id);
        let product = cart[index];
        product.qty = cart.qty + newProduct.qty;
        const newCart = [...cart];
        newCart.splice(index, 1, product);
        setCart([...newCart]);
      } else {
        setCart([...cart, newProduct]);
      }
    }
  };

  const total = cart.reduce((previousValue, currentValue) => {
    let subtotal = currentValue.qty * currentValue.price;
    return previousValue + subtotal;
  }, 0);

  const deleteCartById = (id) => {
    console.log("Click");
    const newCart = [...cart];
    let index = newCart.findIndex((el) => el.id === id);

    newCart.splice(index, 1);

    setCart([...newCart]);
  };

  const deleteCart = () => {
    swal({
      title: "Cuidado! ",
      text: "Estas seguro que deseas borrar todo lo que agregaste?",
      icon: "warning",
      button: "Si",
    });
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        product,
        stars,
        setStars,
        setProduct,
        addToCart,
        deleteCartById,
        deleteCart,
        firebaseProducts,
        setFirebaseProducts,
        showItem,
        setShowItem,
        isLoading,
        setIsLoading,
        total,
        isCartPage,
        setIsCartPage,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
