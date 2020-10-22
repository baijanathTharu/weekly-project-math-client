import React from "react";
import { Redirect, Link } from "react-router-dom";
import styles from "./Gametype.module.css";
import Layout from "../Layout/Layout";

const Gametype = ({ user }) => {
  return (
    <Layout>
      {user ? null : <Redirect to="/" />}
      <div className={styles.Gametype}>
        <h3>Game Mode</h3>
        <div className={styles.Links}>
          <Link to="/single">Single Player</Link>
          <Link to="/multi">Multi Player</Link>
        </div>
      </div>
    </Layout>
  );
};

export default Gametype;
