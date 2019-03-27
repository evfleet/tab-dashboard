import React, { useState } from "react";

import Days from "./components/Days";
import Header from "./components/Header";
import Legend from "./components/Legend";

const Calendar = (): React.ReactElement => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  // const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <section>
      <Header currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
      <Legend currentMonth={currentMonth} />
      <Days currentMonth={currentMonth} />
    </section>
  );
};

export default Calendar;
