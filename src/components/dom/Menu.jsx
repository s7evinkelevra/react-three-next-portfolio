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
        <div>
          <MenuLink href="/">Home</MenuLink>
          <MenuLink href="/portfolio">Portfolio</MenuLink>
          <MenuLink href="/about">About Me</MenuLink>
        </div>
        <div className={styles.fixed_menu_legal}>
          <MenuLink href="/credits">Model + Image Credits</MenuLink>
          <MenuLink href="/impressum">Impressum</MenuLink>
          <MenuLink href="/datenschutz">Datenschutz</MenuLink>
        </div>
      </nav>
    </div>

  );
};

export default Menu;