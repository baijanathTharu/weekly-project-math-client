import React, { useState } from "react";
import styles from "./Singleplayer.module.css";
import Layout from "../Layout/Layout";
import LeftsideSingle from "./LeftsideSingle";
import { MdClear, MdEdit, MdMenu } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import { Redirect } from "react-router-dom";

const entities = require("entities");

const Singleplayer = ({ user }) => {
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(10);
  const [level, setLevel] = useState("easy");
  const [type, setType] = useState("boolean");
  const [fetching, setFetching] = useState(false);
  const [fetched, setFetched] = useState(false);
  const [questions, setQuestions] = useState("");
  const [optionClicked, setOptionClicked] = useState(Array(quantity).fill(0));
  const [count, setCount] = useState(0);

  // https://opentdb.com/api.php?amount=10&category=19&difficulty=medium&type=boolean
  const url = "https://opentdb.com/api.php?category=19";

  // check answer handler
  const checkAnswer = (correct, ans, id) => {
    let isTrue = null;
    let tempCount = count;
    if (correct === ans) {
      isTrue = true;
      tempCount++;
    } else {
      isTrue = false;
    }
    const newArr = [...optionClicked];

    newArr.splice(id, 1, { status: true, queId: id, isTrue });
    setOptionClicked([...newArr]);
    setCount(tempCount);
  };

  const questionsList = questions
    ? questions.map(({ question, correct_answer, incorrect_answers }, idx) => {
        const answersArr = [...incorrect_answers];
        const rand = Math.floor(Math.random() * (incorrect_answers.length + 1));
        answersArr.splice(rand, 0, correct_answer);

        const options = answersArr.map((ans, idy) => {
          return (
            <div
              key={idy}
              className={`${styles.Option} ${
                optionClicked[idx]?.status ? styles.optionDisabled : null
              }`}
              onClick={(e) => checkAnswer(correct_answer, ans, idx)}
            >
              <p>{entities.decodeHTML(ans)}</p>
            </div>
          );
        });

        return (
          <div
            className={`${styles.QuestionBorder} ${
              optionClicked[idx]?.isTrue ? styles.green : null
            }`}
            key={idx}
          >
            {optionClicked[idx]?.status ? (
              optionClicked[idx]?.isTrue ? (
                <>
                  <FaCheck style={{ color: "wheat" }} />
                  <p className={styles.CorrectAns}>
                    <span>Correct: </span>
                    {correct_answer}
                  </p>
                </>
              ) : (
                <>
                  <MdClear
                    style={{ color: "red", fontSize: 20, fontWeight: "bold" }}
                  />
                  <p className={styles.Correct}>
                    <span>Correct: </span>
                    {correct_answer}
                  </p>
                </>
              )
            ) : (
              <MdEdit />
            )}
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
      <h4 onClick={() => setShow(true)}>Select Options</h4>
    </div>
  );

  const main = !questions ? welcomeUser : questionsList;

  const fetchQuestions = async (amount, level, type) => {
    setFetching(!fetching);
    const res = await fetch(
      `${url}&amount=${amount}&difficult=${level}&type=${type}`
    );
    const data = await res.json();
    setShow(!show);
    setFetched(true);
    // results has array of questions
    setQuestions(data.results);
  };

  return (
    <Layout>
      {user ? null : <Redirect to="/" />}
      <div className={styles.Layoutplayer}>
        <div
          className={`${styles.Leftside} ${show ? styles.show : styles.hide}`}
        >
          <LeftsideSingle
            user={user}
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
            count={count}
          />
        </div>
        <div className={styles.Main}>{main}</div>
        <div className={styles.Button} onClick={() => setShow(!show)}>
          {show ? <MdClear /> : <MdMenu />}
        </div>
      </div>
    </Layout>
  );
};

export default Singleplayer;
