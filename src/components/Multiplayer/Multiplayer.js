import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../Layout/Layout";
import styles from "./Multiplayer.module.css";
import { MdClear, MdMenu } from "react-icons/md";

const Multiplayer = ({ user }) => {
  const [show, setShow] = useState(false);
  return (
    <Layout>
      {user ? null : <Redirect to="/" />}
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
        <div className={styles.Button} onClick={() => setShow(!show)}>
          {show ? <MdClear /> : <MdMenu />}
        </div>
      </div>
    </Layout>
  );
};

export default Multiplayer;
