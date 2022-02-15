import React, { useContext } from 'react';

import styles from "./CartWidget.scss"; 
import { FiShoppingCart } from "react-icons/fi";

import { AppContext } from "../../context/AppContext";


const CartWidget = (  ) => {


  const {contador, setContador } = useContext(AppContext);


    return (
      <>
        <FiShoppingCart />
        <span className='cartBadge'>{contador}</span>
      </>
    );
}

export default CartWidget;