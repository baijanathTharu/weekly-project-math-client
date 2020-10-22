import React from "react";
import { Redirect } from "react-router-dom";
import Layoutplayer from "../Layoutplayer/Layoutplayer";

const Multiplayer = ({ user }) => {
  return (
    <>
      {user ? null : <Redirect to="/" />}
      <Layoutplayer title="Multi Player" />;
    </>
  );
};

export default Multiplayer;
