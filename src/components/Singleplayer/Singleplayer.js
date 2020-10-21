import React, { useState } from "react";
import styles from "./Singleplayer.module.css";
import Layout from "../Layout/Layout";
import LeftsideSingle from "./LeftsideSingle";

const entities = require("entities");

const Singleplayer = ({ user }) => {
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(10);
  const [level, setLevel] = useState("easy");
  const [type, setType] = useState("boolean");
  const [fetching, setFetching] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [questions, setQuestions] = useState("");
  const [optionClicked, setOptionClicked] = useState([]);

  // https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=boolean
  const url = "https://opentdb.com/api.php?category=19";

  // check answer handler
  const checkAnswer = (correct, ans, id) => {
    // console.log("correct: ", correct);
    // console.log("answ: ", ans);
    if (correct === ans) {
      // console.log("Correct answer");
    } else {
      // console.log("wrong answer");
    }
    const newArr = [...optionClicked];
    newArr.splice(id, 0, { status: true, queId: id });
    setOptionClicked(newArr);
    console.log("newARr: ", newArr);
    console.log("optionClicked: ", optionClicked);
  };

  const questionsList = questions
    ? questions.map(({ question, correct_answer, incorrect_answers }, idx) => {
        const answersArr = [...incorrect_answers];
        const rand = Math.floor(Math.random() * (incorrect_answers.length + 1));
        answersArr.splice(rand, 0, correct_answer);

        // console.log("Options: ", answersArr);
        // console.log("correct: ", correct_answer);

        const options = answersArr.map((ans, idy) => {
          // console.log("Optionclicked: ", optionClicked);
          // console.log("idx: ", idx);
          return (
            <div
              key={idy}
              className={`${styles.Option} ${
                optionClicked[idx]?.status ? styles.optionDisabled : null
              }`}
              onClick={() => checkAnswer(correct_answer, ans, idx)}
            >
              <p>{entities.decodeHTML(ans)}</p>
            </div>
          );
        });

        return (
          <div className={styles.QuestionBorder} key={idx}>
            <div className={styles.QuestionContainer}>
              <div className={styles.Question}>
                <p>{idx + 1 + ". " + entities.decodeHTML(question)}</p>
              </div>
            </div>
            <div className={styles.OptionContainer}>{options}</div>
          </div>
        );
      })
    : null;

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
    const data = await res.json();
    setFetched(true);
    // results has array of questions
    setQuestions(data.results);
    setShow(!show);
    // console.log(data.results);
  };

  return (
    <Layout>
      <div className={styles.Layoutplayer}>
        <div
          className={`${styles.Leftside} ${show ? styles.show : styles.hide}`}
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
