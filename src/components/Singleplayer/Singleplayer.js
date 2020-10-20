import React, { useState } from "react";
import styles from "./Singleplayer.module.css";
import Layout from "../Layout/Layout";
import Count from "../Count/Count";

const Singleplayer = () => {
  const [show, setShow] = useState(false);
  return (
    <Layout>
      <div className={styles.Layoutplayer}>
        <div
          className={
            show
              ? [styles.Leftside, styles.show].join(" ")
              : [styles.Leftside, styles.hide].join(" ")
          }
        >
          <h3>Left side</h3>
        </div>
        <div className={styles.Main}>
          <h3>Main</h3>
        </div>
        <div className={styles.Count}>
          <Count />
        </div>
        <div className={styles.Button} onClick={() => setShow(!show)}></div>
      </div>
    </Layout>
  );
};

export default Singleplayer;
