import React from "react";
import { Link } from "react-router-dom";

import styles from "./Form.module.css";

const Form = ({ user, setUser }) => {
  return (
    <div className={styles.Form}>
      <h2>Enter Your Username</h2>

      <input
        className={styles.Input}
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        name="username"
      />
      <div className={styles.buttonContainer}>
        <Link to="/gametype" className={!user ? styles.disabled : null}>
          <button className={styles.Button}>Play</button>
        </Link>
      </div>
    </div>
  );
};

export default Form;
