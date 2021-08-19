import { useState } from "react";

import styles from "./Calendar.module.css";

import { daysInMonth } from "../../helpers/date/DateHelpers";

import Header from "../Header/Header";
import WeekDays from "../WeekDays/WeekDays";
import DaysOfMonth from "../DaysOfMonth/DaysOfMonth";
import MonthSelector from "../MonthSelector/MonthSelector";
import { useDispatch, useSelector } from "react-redux";

const Calendar = () => {
  const newMonth = useSelector((state) => state.month);
  const newYear = useSelector((state) => state.year);
  const [displayMonthSelector, setDisplayMonthSelector] = useState(false);
  const dispatch = useDispatch();
  const monthHandler = () => {
    setDisplayMonthSelector(true);
  };

  const selectMonthHandler = (month) => {
    setDisplayMonthSelector(false);
    dispatch({ type: "SET_MONTH", month });
  };

  const days = daysInMonth(newMonth, newYear);
  return (
    <div className={styles.calendar}>
      <Header monthHandler={monthHandler} />
      <WeekDays />
      <DaysOfMonth days={days} month={newMonth} year={newYear} />
      {displayMonthSelector && (
        <MonthSelector selectMonthHandler={selectMonthHandler} />
      )}
    </div>
  );
};

export default Calendar;
