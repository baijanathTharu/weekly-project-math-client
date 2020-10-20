import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

// import socketIO from "socket.io-client";
// components
import Home from "./components/Home/Home";

// const url = `http://localhost:3001`;

const App = () => {
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
      <Route path="/" component={Home} />
    </BrowserRouter>
  );
};

export default App;
