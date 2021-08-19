import styles from "./MonthSelector.module.css";
import { months } from "../../helpers/date/DateHelpers";
import PropTypes from "prop-types";

const MonthSelector = ({ selectMonthHandler }) => {
  return (
    <div className={styles.monthSelector}>
      {months.map((month, i) => {
        return (
          <span
            key={month}
            onClick={() => selectMonthHandler(i)}
            className={`${styles.selectableMonth} ${
              i === month ? styles.selectedMonth : ""
            }`}
          >
            {month}
          </span>
        );
      })}
    </div>
  );
};

MonthSelector.propTypes = {
  selectMonthHandler: PropTypes.func.isRequired,
};

export default MonthSelector;
