import styles from "./DaysOfMonth.module.css";
import { firstDayOfMonth } from "../../helpers/date/DateHelpers";
import Popup from "../../views/Popup/Popup";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useState } from "react";

const DaysOfMonth = ({ days, month, year }) => {
  const dispatch = useDispatch();
  const daysDistinct = Array.from({ length: days }, (k, v) => v + 1);
  const dayToBeginTheMonthFrom = firstDayOfMonth(month, year);
  const currentDay = new Date().getDate();
  const currentMonth = new Date().getMonth();
  const style = { gridColumnStart: dayToBeginTheMonthFrom + 1 };

  const [openModal, setOpenModal] = useState(false);

  const clickHandler = (e) => {
    dispatch({ type: "SET_DAY", day: parseInt(e.target.value) });
    setOpenModal(true);
  };

  const closingModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      {openModal && <Popup modalOpen={openModal} closingModal={closingModal} />}
      {daysDistinct.map((day, i) => {
        return (
          <button
            key={`day${i}`}
            onClick={clickHandler}
            value={day}
            className={`${styles.day} ${i === 0 ? styles.firstDay : ""}
                  ${
                    day === currentDay && month === currentMonth
                      ? styles.today
                      : ""
                  }
                  ${
                    (i + dayToBeginTheMonthFrom) % 7 === 0 ||
                    (i + dayToBeginTheMonthFrom) % 7 === 6
                      ? styles.holiday
                      : ""
                  }
                  `}
            style={i === 0 ? style : {}}
          >
            {day}
          </button>
        );
      })}
    </>
  );
};

DaysOfMonth.propTypes = {
  days: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
};

DaysOfMonth.defaultProps = {
  days: null,
  month: null,
  year: null,
};

export default DaysOfMonth;
