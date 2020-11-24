import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import styles from "./ContactData.module.css";

export default class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };
  render() {
    return (
      <div className={styles.ContactData}>
        <h4>Enter your Contact Details</h4>
        <form>
          <input
            className={styles.Input}
            type="text"
            name="name"
            placeholder="Your name"
          />
          <input
            className={styles.Input}
            type="email"
            name="email"
            placeholder="Your Mail"
          />
          <input
            className={styles.Input}
            type="text"
            name="street"
            placeholder="Street"
          />
          <input
            className={styles.Input}
            type="text"
            name="postal"
            placeholder="Postal Code"
          />
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}