import React from "react";

import styles from "./Home.module.css";
import Layout from "../Layout/Layout";
import Form from "../Form/Form";

const Home = () => {
  return (
    <Layout>
      <div className={styles.Home}>
        <Form />
      </div>
    </Layout>
  );
};

export default Home;
