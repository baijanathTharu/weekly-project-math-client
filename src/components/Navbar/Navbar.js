import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <Link to="/">
        <h1>MatheGamics</h1>
      </Link>
      <ul>
        <li>Rules</li>
      </ul>
    </div>
  );
};

export default Navbar;
