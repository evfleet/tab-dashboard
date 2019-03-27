import React from "react";
import dateFns from "date-fns";

import styles from "./styles.scss";

interface DayProps {
  currentMonth: Date;
}

const Days: React.SFC<DayProps> = ({ currentMonth }): React.ReactElement => {
  const renderDays = (): React.ReactElement[] => {
    const monthStart = dateFns.startOfMonth(currentMonth);
    const monthEnd = dateFns.endOfMonth(monthStart);
    const startDate = dateFns.startOfWeek(monthStart);
    const endDate = dateFns.endOfWeek(monthEnd);

    let days = [];
    let day = startDate;

    while (day <= endDate) {
      days.push(
        <div>
          <span>
            {dateFns.isSameMonth(day, monthEnd) && dateFns.format(day, "D")}
          </span>
        </div>
      );

      day = dateFns.addDays(day, 1);
    }

    return days;
  };

  return <section className={styles.container}>{renderDays()}</section>;
};

export default Days;
