import styles from "../Header/Header.module.css";
import myStyles from "./HeaderPopup.module.css";
import { useDispatch, useSelector } from "react-redux";
import { months, daysInMonth } from "../../helpers/date/DateHelpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const HeaderModal = () => {
  const dispatch = useDispatch();
  let newDay = useSelector((state) => state.day);
  let newMonth = useSelector((state) => state.month);
  let newYear = useSelector((state) => state.year);
  const newDaysInMonth = daysInMonth(newMonth, newYear);
  const decreaseDay = () => {
    if (newMonth < 1 && newDay <=1) {
      dispatch({ type: "SET_YEAR", year: newYear - 1 });
      dispatch({ type: "SET_MONTH", month: 11 });
      dispatch({ type: "SET_DAY", day: newDaysInMonth });
      return;
    }
    if (newDay < 2 && newMonth > 0) {
      const newDaysInMonthForMonths = daysInMonth(newMonth - 1, newYear);
      dispatch({ type: "SET_MONTH", month: newMonth - 1 });
      dispatch({ type: "SET_DAY", day: newDaysInMonthForMonths });
      return;
    }
    dispatch({ type: "SET_DAY", day: newDay - 1 });
  };

  const increaseDay = () => {
    if (newMonth > 10 && newDay >=newDaysInMonth) {
      dispatch({ type: "SET_YEAR", year: newYear + 1 });
      dispatch({ type: "SET_MONTH", month: 0 });
      dispatch({ type: "SET_DAY", day: 1 });
      return;
    }
    if (newDay >= newDaysInMonth) {
      dispatch({ type: "SET_MONTH", month: newMonth + 1 });
      dispatch({ type: "SET_DAY", day: 1 });
      return;
    }
    dispatch({ type: "SET_DAY", day: newDay + 1 });
  };

  return (
    <div className={styles.header}>
      <div className={myStyles.headerInfo}>
        <span className={styles.headerDay}>
          {newDay} {}
        </span>
        <span className={myStyles.headerMonth}>{months[newMonth]}</span>
        <span className={styles.headerYear}>{newYear}</span>
      </div>
      <div className={styles.headerIcons}>
        <span onClick={decreaseDay}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
        <span onClick={increaseDay}>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </div>
    </div>
  );
};

export default HeaderModal;
