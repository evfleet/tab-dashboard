import React from "react";

import styles from "./styles.scss";

const Todos = (): React.ReactElement => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <p>Todos</p>
      </section>
    </div>
  );
};

export default Todos;
