import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../Layout/Layout";
import styles from "./Multiplayer.module.css";
import { MdClear, MdMenu } from "react-icons/md";

import socketIO from "socket.io-client";

const url = "http://localhost:3001";

const Multiplayer = ({ user }) => {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");

  // make socket connection when component is mounted
  useEffect(() => {
    const socket = socketIO(url);

    socket.on("connection", () => {
      console.log("Connected to the server.");
    });
    socket.emit("message", "Hello server whats up?");
    socket.on("message", (m) => {
      setMsg(m);
      console.log(`Message received: ${m}`);
    });
  }, []);

  return (
    <Layout>
      {user ? null : <Redirect to="/" />}
      <div className={styles.Layoutplayer}>
        <div
          className={`${styles.Leftside} ${show ? styles.show : styles.hide}`}
        >
          <h3>Left side</h3>
        </div>
        <div className={styles.Main}>
          <h3>Main</h3>
          <h4>Message Received: {msg}</h4>
        </div>
        <div className={styles.Button} onClick={() => setShow(!show)}>
          {show ? <MdClear /> : <MdMenu />}
        </div>
      </div>
    </Layout>
  );
};

export default Multiplayer;
