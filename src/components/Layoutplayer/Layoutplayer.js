import React from "react";

import Layout from "../Layout/Layout";
import styles from "./Layoutplayer.module.css";

const Layoutplayer = ({ title }) => {
  return (
    <Layout>
      <div className={styles.Layoutplayer}>
        <h1>{title}</h1>
      </div>
    </Layout>
  );
};

export default Layoutplayer;
