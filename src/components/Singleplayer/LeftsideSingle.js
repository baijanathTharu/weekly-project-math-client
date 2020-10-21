import React from "react";
import styles from "./LeftsideSingle.module.css";

const LeftsideSingle = ({
  userOptions: { quantity, level, type, setQuantity, setLevel, setType },
}) => {
  return (
    <div className={styles.LeftsideSingle}>
      <div className={styles.Count}>
        <h3>Count will be here</h3>
      </div>
      <div className={styles.Option}>
        <h3>Number of Questions</h3>
        <input
          type="number"
          name="questions"
          placeholder={quantity}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div className={styles.Option}>
        <h3>Difficulty Level</h3>
        <select name="level" onChange={(e) => setLevel(e.target.value)}>
          <option value="easy" defaultValue>
            Easy
          </option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>
      <div className={styles.Option}>
        <h3>Type of Questions</h3>
        <select name="type" onChange={(e) => setType(e.target.value)}>
          <option value="boolean" defaultValue>
            True or False
          </option>
          <option value="multiple">Multiple Choice</option>
        </select>
      </div>
    </div>
  );
};

export default LeftsideSingle;
