import React from 'react';

import { FiMenu } from "react-icons/fi";
import CartWidget from "../../components/CartWidget/CartWidget";
import List from "./components/list/List";


const NavMobile = ( {styles} ) => {
    return (
      <div className={styles.Menu}>
        <FiMenu />
        <CartWidget sales={4} />
        <div className={styles.MobileMenu}>
          <List />
        </div>
        <div className={styles.accountNav}>
          <p>Account</p>
        </div>
      </div>
    );
}

export default NavMobile;