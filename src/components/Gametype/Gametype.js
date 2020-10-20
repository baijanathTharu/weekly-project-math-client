import React from "react";
import { Link } from "react-router-dom";
import styles from "./Gametype.module.css";
import Layout from "../Layout/Layout";

const Gametype = () => {
  return (
    <Layout>
      <div className={styles.Gametype}>
        <h1>Type of the game</h1>
        <Link to="/single">Single Player</Link>
        <Link to="/multi">Multi Player</Link>
      </div>
    </Layout>
  );
};

export default Gametype;
