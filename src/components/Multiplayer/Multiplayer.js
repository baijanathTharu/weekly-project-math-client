import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../Layout/Layout";
import styles from "./Multiplayer.module.css";
import { MdClear, MdMenu } from "react-icons/md";
import Leftsidemulti from "./Leftsidemulti";

import socketIO from "socket.io-client";

const url = "http://localhost:3001";

const socket = socketIO(url);

const Multiplayer = ({ user }) => {
  const [level, setLevel] = useState("easy");
  const [type, setType] = useState("boolean");
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const [room, setRoom] = useState(null);
  const [members, setMembers] = useState([]);

  // make socket connection when component is mounted
  useEffect(() => {
    socket.on("connection", () => {
      console.log("Connected to the server.");
    });
    socket.emit("message", "Hello server whats up?");
  }, []);

  socket.on("message", (m) => {
    setMsg(m);
    console.log(`Message received: ${m}`);
  });

  // room handler
  const roomHandler = () => {
    const roomInfo = {
      roomLevel: level,
      roomType: type,
      userName: user,
    };
    socket.emit("room", JSON.stringify(roomInfo));
    // console.log("roomInfo: ", roomInfo);
  };

  // when room has been created
  socket.on("room", (res) => {
    const serverRes = JSON.parse(res);
    console.log("Members in this room are:>> ", serverRes.roomMembers);
    // now set the room
    setRoom(serverRes.roomName);
    // setMembers(serverRes.roomMembers);
    // console.log("Members state: ", members);
  });

  // when new members join
  socket.on(`add_${room}`, (res) => {
    const list = JSON.parse(res);
    setMembers(list.membersList);
    console.log("List: ", list);
    console.log("Members: ", members);
  });

  // when a user has disconnected
  socket.on(`user_disconnected_${room}`, (msg) => {
    console.log("Disconnection:>>> ", msg);
  });

  // Welcome User
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

  return (
    <Layout>
      {user ? null : <Redirect to="/" />}
      <div className={styles.Layoutplayer}>
        <div
          className={`${styles.Leftside} ${show ? styles.show : styles.hide}`}
        >
          <Leftsidemulti
            members={members}
            user={user}
            userOptions={{
              level,
              type,
              setLevel,
              setType,
              room,
            }}
            selectRoom={() => roomHandler()}
          />
        </div>
        <div className={styles.Main}>{welcomeUser}</div>
        <div className={styles.Button} onClick={() => setShow(!show)}>
          {show ? <MdClear /> : <MdMenu />}
        </div>
      </div>
    </Layout>
  );
};

export default Multiplayer;
