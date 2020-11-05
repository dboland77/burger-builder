import React from "react";
import burgerlogo from "../../assets/images/burger-logo.png";
import styles from "../Logo/Logo.module.css";

const Logo = (props) => {
  return (
    <div className={styles.Logo}>
      <img src={burgerlogo} alt="MyBurger"></img>
    </div>
  );
};

export default Logo;
