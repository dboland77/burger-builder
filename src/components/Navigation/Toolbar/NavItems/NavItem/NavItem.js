import React from "react";
import classes from "./NavItem.module.css";
import styles from "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <li className={styles.NavItem}>
      <a href={props.link} className={props.active ? classes.active : null}>
        {props.children}
      </a>
    </li>
  );
};

export default NavItem;
