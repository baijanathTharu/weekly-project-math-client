import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.Form}>
      <h2>Enter Your Username</h2>
      <form action="">
        <input className={styles.Input} type="text" name="username" />
        <div className={styles.buttonContainer}>
          <button className={styles.Button}>Play</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
