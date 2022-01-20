import React from 'react'

import styles from "./Nav.module.css"; 



import NavMobile from './NavMobile'
import NavDesktop from './NavDesktop'

const NavBar = () => {

    return (
      <nav className={styles.navcontainer}>
        <NavDesktop styles={styles} />
        <NavMobile styles={styles} />
      </nav>
    );

}

export { NavBar }; 