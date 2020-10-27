import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [stick, setStick] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150) {
        setStick(true);
      } else {
        setStick(false);
      }
    });
  }, []);

  return (
    <div className={`${styles.Navbar} ${stick ? styles.sticky : null}`}>
      <Link to="/">
        <h1>MatheGamics</h1>
      </Link>
      <ul>
        <li>
          <Link to="/rules">Rules</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
