import React from "react";

import styles from "./styles.scss";

const Weather = (): React.ReactElement => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <p>Weather</p>
      </section>
    </div>
  );
};

export default Weather;
