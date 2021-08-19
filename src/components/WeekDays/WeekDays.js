import { weekdays } from "../../helpers/date/DateHelpers";
import styles from "./WeekDays.module.css";

const WeekDays = () => {
  return (
    <div className={styles.weekrow}>
      {weekdays.map((weekday) => {
        return (
          <span key={weekday} className={styles.weekday}>
            {weekday}
          </span>
        );
      })}
    </div>
  );
};

export default WeekDays;
