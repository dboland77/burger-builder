import React from "react";
import styles from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";

const NavItems = () => {
  return (
    <ul className={styles.NavItems}>
      <NavItem link="/">Burger Builder</NavItem>
      <NavItem link="/orders">Orders</NavItem>
    </ul>
  );
};

export default NavItems;
