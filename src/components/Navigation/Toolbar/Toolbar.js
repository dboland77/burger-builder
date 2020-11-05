import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavItems from "../Toolbar/NavItems/NavItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const Toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked}/>
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav className={styles.DesktopOnly}>
        <NavItems />
      </nav>
    </header>
  );
};

export default Toolbar;
