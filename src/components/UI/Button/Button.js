import React from "react";
import styles from "./Button.module.css";

// The code below is a really neat example of how to
// add conditional css from a css module
// set up the styles as an array and then join the elements
// with a space string

const Button = (props) => {
  return (
    <button
      disabled={props.disabled}
      className={[styles.Button, styles[props.btnType]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </button>
  );
};

export default Button;
