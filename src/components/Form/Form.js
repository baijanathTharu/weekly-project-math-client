import React from "react";
import { Link } from "react-router-dom";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.Form}>
      <h2>Enter Your Username</h2>
      <form action="">
        <input className={styles.Input} type="text" name="username" />
        <div className={styles.buttonContainer}>
          <button className={styles.Button}>
            <Link to="/gametype">Play</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
