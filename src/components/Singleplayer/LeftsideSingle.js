import React from "react";
import styles from "./LeftsideSingle.module.css";
import Loader from "../Loader/Loader";

const LeftsideSingle = ({
  userOptions: { quantity, level, type, setQuantity, setLevel, setType },
  fetchQuestions,
  fetched,
  fetching,
  count,
  user,
}) => {
  const loader = fetching ? (
    <div className={styles.LoaderContainer}>
      <Loader className={styles.Loader} />
    </div>
  ) : null;

  return (
    <div className={styles.LeftsideSingle}>
      <div className={fetched ? styles.Count : styles.hide}>
        <h3>{user}</h3>
        <p>Your Score is: {count}</p>
      </div>
      <div
        className={
          fetched
            ? [styles.UserOptionContainer, styles.hide].join(" ")
            : styles.UserOptionContainer
        }
      >
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
        <div
          className={styles.FetchButton}
          onClick={() => fetchQuestions(quantity, level, type)}
        >
          <p>Start</p>
        </div>
        {loader}
      </div>
    </div>
  );
};

export default LeftsideSingle;
