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
    if (!cart.length) {
      setCart([newProduct]);
    } else {
      if (cart.some((el) => el.id === newProduct.id)) {
        let index = cart.findIndex((el) => el.id === newProduct.id);
        let product = cart[index];
        product.qty = cart.qty + newProduct.id;
        const newCart = [...cart];
        newCart.splice(index, 1, product);
        setCart([...newCart]);
      } else {
        setCart([...cart, newProduct]);
      }
    }

    //     useEffect(() => {
    //   const getJuegos = async () => {
    //     const q = query(collection(db, "products"));
    //     const docs = [];
    //     const querySnapshot = await getDocs(q);
    //   //   console.log(querySnapshot);
    //     querySnapshot.forEach((doc) => {
    //       console.log(doc.id, " => ", doc.data());
    //       docs.push( { ...doc.data(), id: doc.id});
    //     });
    //     console.log(docs)
    //     setFirebaseProducts(docs)
    //   };
    //   getJuegos();
    // }, []);
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
        deleteCart
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
