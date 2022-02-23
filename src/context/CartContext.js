import React, { useState, createContext } from "react";

export const CartContext = createContext(null);

const CartProvider = (props) => {
  // Producto individual para la pagina de detail
  const [product, setProduct] = useState({});
  // Estrellas para la pagina de detail
  const [stars, setStars] = useState();

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [firebaseProducts, setFirebaseProducts] = useState([]);

  const addToCart = (item, qty) => {
    if (cart.some((el) => el.id === item.id)) {
      let index = cart.findIndex((el) => el.id === item.id);
      let product = cart[index];
      product.qty = product.qty + qty;

      const newCart = [...cart];
      newCart.splice(index, 1, product);

      setCart([...newCart]);
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
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
