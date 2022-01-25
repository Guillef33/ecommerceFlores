import React from 'react';

import styles from "./CartWidget.module.css"; 
import { FiShoppingCart } from "react-icons/fi";

// import Contador from '../ItemListContainer/Contador'

const CartWidget = ( {sales, contador} ) => {
    return (
      <>
        <FiShoppingCart />
        <span className={styles.cartBadge}>{contador}</span>
      </>
    );
}

export default CartWidget;