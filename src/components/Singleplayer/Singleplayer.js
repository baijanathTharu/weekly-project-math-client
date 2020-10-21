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
          <div className={styles.QuestionContainer}>
            <div className={styles.Question}>
              <p>
                When was the Declaration of Independence approved by the Second
                Continental Congress?
              </p>
            </div>
          </div>
          <div className={styles.OptionContainer}>
            <div className={styles.Option}>
              <p>May 4, 1776</p>
            </div>
            <div className={styles.Option}>
              <p>June 4, 1776</p>
            </div>
            <div className={styles.Option}>
              <p>July 4, 1776</p>
            </div>
            <div className={styles.Option}>
              <p>July 2, 1776</p>
            </div>
          </div>
          <div className={styles.ButtonContainer}>
            <button>Submit</button>
          </div>
        </div>
        <div className={styles.Button} onClick={() => setShow(!show)}></div>
      </div>
    </Layout>
  );
};

export default Singleplayer;
