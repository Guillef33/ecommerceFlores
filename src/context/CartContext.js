import React, { useState, createContext } from "react";

export const CartContext = createContext(null);

const CartProvider = (props) => {
  // Producto individual para la pagina de detail
  const [product, setProduct] = useState({});
  // Estrellas para la pagina de detail
  const [stars, setStars] = useState();

    const [showItem, setShowItem] = useState(true);


  const [cart, setCart] = useState([]);
  // const [total, setTotal] = useState(0);
  const [firebaseProducts, setFirebaseProducts] = useState([]);

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
        setShowItem
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
