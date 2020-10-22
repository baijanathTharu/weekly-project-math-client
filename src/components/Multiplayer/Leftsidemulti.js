import React from "react";
import styles from "./Leftsidemulti.module.css";

const Leftsidemulti = ({
  userOptions: { level, type, setLevel, setType },
  user,
}) => {
  const chooseRoom = (
    <div className={styles.ChooseRoom}>
      <h2>Choose Room</h2>
      <div className={styles.UserOptionContainer}>
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
      <div className={styles.FetchButton}>
        <p>Start</p>
      </div>
    </div>
  );

  const scoreContainer = (
    <div className={styles.ScoreContainer}>
      <h2>Room Name</h2>
      <ul className={styles.Scores}>
        <li>UserOne: 5</li>
        <li>UserTwo: 3</li>
        <li>UserThree: 0</li>
        <li>UserFour: 0</li>
      </ul>
    </div>
  );

  const chatContainer = (
    <div className={styles.ChatContainer}>
      <h2>Chat Room</h2>
      <div className={styles.InputContainer}>
        <textarea name="messsge"></textarea>
        <button>Send</button>
      </div>
      <div className={styles.MessageContainer}>
        <div className={styles.Message}>
          <h4>Username</h4>
          <p>Hello, some message for you...</p>
        </div>
        <div className={styles.Message}>
          <h4>Username</h4>
          <p>Hello, some message for you...</p>
        </div>
        <div className={styles.Message}>
          <h4>Username</h4>
          <p>Hello, some message for you...</p>
        </div>
        <div className={styles.Message}>
          <h4>Username</h4>
          <p>Hello, some message for you...</p>
        </div>
        <div className={styles.Message}>
          <h4>Username</h4>
          <p>Hello, some message for you...</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className={styles.Leftsidemulti}>
      {chooseRoom}
      {scoreContainer}
      {chatContainer}
    </div>
  );
};

export default Leftsidemulti;
