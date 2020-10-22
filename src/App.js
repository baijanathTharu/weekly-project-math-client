import React, { useState } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

// import socketIO from "socket.io-client";
// components
import Home from "./components/Home/Home";
import Gametype from "./components/Gametype/Gametype";
import Singleplayer from "./components/Singleplayer/Singleplayer";
import Multiplayer from "./components/Multiplayer/Multiplayer";

// const url = `http://localhost:3001`;

const App = () => {
  const [username, setUsername] = useState("");

  // const [msg, setMsg] = useState("");

  // useEffect(() => {
  //   const socket = socketIO(url);
  //   socket.on("connection", () => {
  //     console.log("connected to the server...");
  //   });
  //   socket.emit("message", "Hello server whats up?");
  //   socket.on("message", (msg) => {
  //     setMsg(msg);
  //     console.log(`Message received from the server:: ${msg}`);
  //   });
  // }, []);

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/gametype"
          render={(props) => <Gametype {...props} user={username} />}
        />
        <Route
          path="/single"
          render={(props) => <Singleplayer {...props} user={username} />}
        />
        <Route
          path="/multi"
          render={(props) => <Multiplayer {...props} user={username} />}
        />
        <Route
          path="/"
          render={(props) => (
            <Home {...props} user={username} setUser={setUsername} />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
