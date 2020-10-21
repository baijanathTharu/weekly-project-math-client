import React from "react";

import styles from "./Home.module.css";
import Layout from "../Layout/Layout";
import Form from "../Form/Form";

const Home = ({ user, setUser }) => {
  return (
    <Layout>
      <div className={styles.Home}>
        <Form user={user} setUser={setUser} />
      </div>
    </Layout>
  );
};

export default Home;
