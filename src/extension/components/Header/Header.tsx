import React from "react";

import styles from "./styles.scss";

const Header = (): React.ReactElement => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.container}>
        <p>Hello</p>
      </header>
    </div>
  );
};

export default Header;
