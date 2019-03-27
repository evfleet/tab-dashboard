import React from "react";
import dateFns from "date-fns";

import styles from "./styles.scss";

interface HeaderProps {
  currentMonth: Date;
  setCurrentMonth: React.Dispatch<React.SetStateAction<Date>>;
}

const Header: React.SFC<HeaderProps> = ({
  currentMonth,
  setCurrentMonth
}): React.ReactElement => {
  const nextMonth = (): void => {
    setCurrentMonth(dateFns.addMonths(currentMonth, 1));
  };

  const prevMonth = (): void => {
    setCurrentMonth(dateFns.subMonths(currentMonth, 1));
  };

  const renderHead = (): React.ReactElement => {
    return (
      <div className={styles.container}>
        <button className={styles.button} onClick={prevMonth}>
          Prev
        </button>

        <span>{dateFns.format(currentMonth, "MMMM YYYY")}</span>

        <button className={styles.button} onClick={nextMonth}>
          Next
        </button>
      </div>
    );
  };

  return <header className={styles.header}>{renderHead()}</header>;
};

export default Header;
