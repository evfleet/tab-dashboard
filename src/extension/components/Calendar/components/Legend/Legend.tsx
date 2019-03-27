import React from "react";
import dateFns from "date-fns";

import styles from "./styles.scss";

interface LegendProps {
  currentMonth: Date;
}

const Legend: React.SFC<LegendProps> = ({
  currentMonth
}): React.ReactElement => {
  const renderDays = (): React.ReactElement[] => {
    const days = [];
    const startDate = dateFns.startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className={styles.label} key={`day-${i}`}>
          {dateFns.format(dateFns.addDays(startDate, i), "dddd")}
        </div>
      );
    }

    return days;
  };

  return <section className={styles.container}>{renderDays()}</section>;
};

export default Legend;
