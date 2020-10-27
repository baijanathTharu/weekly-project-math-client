import React from "react";
import classes from "./Rules.module.css";
import Layout from "../Layout/Layout";

const Rules = () => {
  return (
    <Layout>
      <div className={classes.Rules}>
        <div className={classes.Single}>
          <h2>Single Player</h2>
          <ul>
            <li>Enter your username.</li>
            <li>Select Single player mode.</li>
            <li>
              Select the number of questions, difficulty level and type of
              question.
            </li>
            <li>Start the quiz.</li>
            <li>
              You will be presented with questions according to your choice.
            </li>
            <li>Choose the correct answer from the options.</li>
            <li>You can see your score in the left side bar.</li>
          </ul>
        </div>
        <div className={classes.Multi}>
          <h2>Multi Player</h2>
          <ul>
            <li>Enter your username.</li>
            <li>Select Multi player mode.</li>
            <li>Choose room from the left side bar.</li>
            <li>You will be alloted a room according to your choice.</li>
            <li>
              Everyone who makes same choice as yours can join your room untill
              you leave the game.
            </li>
            <li>
              One who joins the room first will be treated as admin and can
              start the game.
            </li>
            <li>Start the quiz.</li>
            <li>Everyone will be presented a question.</li>
            <li>Choose the correct answer from the options. </li>
            <li>You get 10 seconds after someone has answered the question.</li>
            <li>You can see everyone's score after 10 seconds.</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Rules;
