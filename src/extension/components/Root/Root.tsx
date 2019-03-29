import React from "react";

import styles from "./styles.scss";
import Header from "../Header";
import Todos from "../Todos";
import Weather from "../Weather";
import Calendar from "../Calendar";

const Root = (): React.ReactElement => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <main className={styles.container}>
        <Weather />
        <Todos />
        <Calendar />
      </main>
    </div>
  );
};

export default Root;
