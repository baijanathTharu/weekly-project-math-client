import React, { useState } from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";

// components
import Home from "./components/Home/Home";
import Gametype from "./components/Gametype/Gametype";
import Singleplayer from "./components/Singleplayer/Singleplayer";
import Multiplayer from "./components/Multiplayer/Multiplayer";
import Rules from "./components/Rules/Rules";

const App = () => {
  const [username, setUsername] = useState("");

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
        <Route path="/rules" component={Rules} />
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
