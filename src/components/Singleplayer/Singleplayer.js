import React, { useState } from "react";
import styles from "./Singleplayer.module.css";
import Layout from "../Layout/Layout";
// import Count from "../Count/Count";
import LeftsideSingle from "./LeftsideSingle";

const Singleplayer = ({ user }) => {
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(10);
  const [level, setLevel] = useState("easy");
  const [type, setType] = useState("boolean");
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
          <LeftsideSingle
            userOptions={{
              quantity,
              level,
              type,
              setQuantity,
              setLevel,
              setType,
            }}
          />
        </div>
        <div className={styles.Main}>
          <h3>Main</h3>
          <p>quantity: {quantity}</p>
          <p>level: {level}</p>
          <p>Type: {type}</p>
        </div>
        <div className={styles.Button} onClick={() => setShow(!show)}></div>
      </div>
    </Layout>
  );
};

export default Singleplayer;
