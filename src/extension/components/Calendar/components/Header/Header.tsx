import React from "react";
import dateFns from "date-fns";

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
      <React.Fragment>
        <button onClick={prevMonth}>Prev</button>

        <span>{dateFns.format(currentMonth, "MMMM YYYY")}</span>

        <button onClick={nextMonth}>Next</button>
      </React.Fragment>
    );
  };

  return <header>{renderHead()}</header>;
};

export default Header;
