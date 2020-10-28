import React, { useRef, useEffect } from "react";
import styles from "./Leftsidemulti.module.css";
import { MdSend } from "react-icons/md";

const Leftsidemulti = ({
  members,
  userOptions: { level, type, setLevel, setType, room },
  user,
  selectRoom,
  sendChat,
  setChatMsg,
  chatMsg,
  chatsList,
  compete,
  hideCompeteBtn,
}) => {
  // chatref for scrolling
  const chatRef = useRef(null);

  // scroll whenver chats are received
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollIntoView();
    }
  });

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
      <div className={styles.FetchButton} onClick={() => selectRoom()}>
        <p>Start</p>
      </div>
    </div>
  );

  const membersList = members
    ? members.map((mem, idx) => {
        return <li key={`${mem.userName}_${idx}`}>{mem.userName}</li>;
      })
    : null;

  // users and start competing
  const scoreContainer = (
    <div className={styles.ScoreContainer}>
      <h2>{room}</h2>
      <ul className={styles.Scores}>{membersList}</ul>
      {user === members[0]?.userName ? (
        <button
          onClick={() => compete()}
          className={hideCompeteBtn ? styles.hide : null}
        >
          Compete
        </button>
      ) : null}
    </div>
  );

  // rendering chats
  const chatsRender = !chatsList
    ? null
    : chatsList.map((msg, idx) => {
        return (
          <div key={idx} className={styles.Message}>
            <h4>{msg.user}</h4>
            <p>{msg.chat}</p>
          </div>
        );
      });

  const chatContainer = (
    <div className={styles.ChatContainer}>
      <h2>Chat Room</h2>
      <div className={styles.MessageContainer}>
        {chatsRender}
        <div ref={chatRef}></div>
      </div>
      <div className={styles.InputContainer}>
        <textarea
          name="messsge"
          onChange={(e) => setChatMsg(e.target.value)}
          value={chatMsg}
        ></textarea>
        <button onClick={() => sendChat()}>
          <MdSend />
        </button>
      </div>
    </div>
  );

  return (
    <div className={styles.Leftsidemulti}>
      {!room ? (
        chooseRoom
      ) : (
        <>
          {scoreContainer}
          {chatContainer}
        </>
      )}
    </div>
  );
};

export default Leftsidemulti;
