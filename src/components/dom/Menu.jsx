import React from 'react';
import Link from "next/link"

import styles from './Menu.module.css'



const MenuLink = ({ href, children }) => (
  <Link href={href}>
    <a className={styles.menu_link}>{children}</a>
  </Link>
)


const Menu = ({ width }) => {
  return (
    <div className={styles.fixed_menu_container} style={{ width }}>
      <nav className={styles.fixed_menu}>
        <MenuLink href="/">Home</MenuLink>
        <MenuLink href="/portfolio">Portfolio</MenuLink>
        <MenuLink href="/about">About Me</MenuLink>
        {/* <MenuLink href="/impressum">Impressum</MenuLink>
        <MenuLink href="/datenschutz">Datenschutz</MenuLink> */}

      </nav>
    </div>

  );
};

export default Menu;