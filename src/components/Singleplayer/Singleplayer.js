import React, { useState } from "react";
import styles from "./Singleplayer.module.css";
import Layout from "../Layout/Layout";
import LeftsideSingle from "./LeftsideSingle";

const Singleplayer = ({ user }) => {
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(10);
  const [level, setLevel] = useState("easy");
  const [type, setType] = useState("boolean");
  const [fetching, setFetching] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [questions, setQuestions] = useState("");

  // https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=boolean
  const url = "https://opentdb.com/api.php?category=19";

  const questionsList = (
    <>
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
    </>
  );

  const welcomeUser = (
    <div className={styles.WelcomeUser}>
      <h2>
        Welcome <span className={styles.Username}>{user}</span> to
        <span className={styles.MatheGamics}> MatheGamics.</span>
      </h2>
      <h3 className={styles.Wish}>All The Best!</h3>
    </div>
  );

  const main = !questions ? welcomeUser : questionsList;

  const fetchQuestions = async (amount, level, type) => {
    setFetching(!fetching);
    const res = await fetch(
      `${url}&amount=${quantity}&difficult=${level}&type=${type}`
    );
    const questions = await res.json();
    setFetched(true);
    setQuestions(questions);
    setShow(!show);
    console.log(questions);
  };

  // useEffect(() => {
  //   fetchQuestions(quantity, level, type);
  //   return () => {};
  // }, []);

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
            fetchQuestions={fetchQuestions}
            fetched={fetched}
            fetching={fetching}
          />
        </div>
        <div className={styles.Main}>{main}</div>
        <div className={styles.Button} onClick={() => setShow(!show)}></div>
      </div>
    </Layout>
  );
};

export default Singleplayer;
