import React from "react";
import Navbar from "../Navbar/Navbar";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.Layout}>
      <Navbar />
      <div className={styles.Content}>{children}</div>
    </div>
  );
};

export default Layout;
