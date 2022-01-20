import React from "react";

import { FaBeer } from "react-icons/fa";
import CartWidget from "../../components/CartWidget/CartWidget";
import List from "./components/list/List";

const NavDesktop = ( {styles } ) => {
  return (
    <>
      <div>
        <p>
          <FaBeer className={styles.faBeer} />
        </p>
      </div>
      <div className={styles.desktopMenu}>
        <List />
      </div>
      <div className={styles.accountNav}>
        <p>Account</p>
        <CartWidget sales={4} />
      </div>
    </>
  );
};

export default NavDesktop;
