import React from 'react';

import styles from "./CartWidget.scss"; 
import { FiShoppingCart } from "react-icons/fi";

// import Contador from '../ItemListContainer/Contador'

const CartWidget = ( {sales, contador} ) => {
    return (
      <>
        <FiShoppingCart />
        <span className='cartBadge'>{contador}</span>
      </>
    );
}

export default CartWidget;