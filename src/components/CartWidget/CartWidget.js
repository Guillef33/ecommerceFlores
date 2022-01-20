import React from 'react';

import styles from "./CartWidget.module.css"; 
import { FiShoppingCart } from "react-icons/fi";

const CartWidget = ( {sales} ) => {
    return (
      <>
        <FiShoppingCart />
        <span className={styles.cartBadge}>{sales}</span>
      </>
    );
}

export default CartWidget;