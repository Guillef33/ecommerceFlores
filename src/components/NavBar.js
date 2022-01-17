import React from 'react'

import styles from "./Nav.module.css"; 

import { FaBeer } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {

    return (
      <nav className={styles.navcontainer}>
        <div>
          <p>
            <FaBeer className={styles.faBeer} />
          </p>
        </div>
        {/* <div>
          <FiMenu />
        </div> */}
        <div className={styles.desktopMenu}>
          <ul>
            <li>Inicio</li>
            <li>Productos</li>
            <li>Contacto</li>
          </ul>
        </div>
        <div className={styles.accountNav}>
          <p>Account</p>
          <p>Cart</p>
        </div>
        <div className={styles.Menu}>
          <FiMenu />
          <div className={styles.MobileMenu}>
            <ul>
              <li>Inicio</li>
              <li>Productos</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div className={styles.accountNav}>
            <p>Account</p>
            <p>Cart</p>
          </div>
        </div>
      </nav>
    );

}

export { NavBar }; 