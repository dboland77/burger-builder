import React, { Fragment } from "react";
import Logo from "../../Logo/Logo";
import NavItems from "../Toolbar/NavItems/NavItems";
import styles from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const SideDrawer = (props) => {
  let attachedStyles = [styles.SideDrawer, styles.Close];

  if (props.open) {
    attachedStyles = [styles.SideDrawer, styles.Open];
  }
  return (
    <Fragment>
      <Backdrop show={props.open} clicked={props.closed} />
      <div className={attachedStyles.join(' ')}>
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavItems />
        </nav>
      </div>
    </Fragment>
  );
};

export default SideDrawer;
