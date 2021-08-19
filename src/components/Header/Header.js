import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import { months } from "../../helpers/date/DateHelpers";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

const Header = ({ monthHandler }) => {
  const dispatch = useDispatch();
  let newMonth = useSelector((state) => state.month);
  let newYear = useSelector((state) => state.year);
  const decreaseMonth = () => {
    if (newMonth < 1) {
      dispatch({ type: "SET_YEAR", year: newYear - 1 });
      dispatch({ type: "SET_MONTH", month: 11 });
      return;
    }
    dispatch({ type: "SET_MONTH", month: newMonth - 1 });
  };

  const increaseMonth = () => {
    if (newMonth > 10) {
      dispatch({ type: "SET_YEAR", year: newYear + 1 });
      dispatch({ type: "SET_MONTH", month: 0 });
      return;
    }
    dispatch({ type: "SET_MONTH", month: newMonth + 1 });
  };

  return (
    <div className={styles.header}>
      <div className={styles.headerInfo}>
        <span className={styles.headerMonth} onClick={monthHandler}>
          {months[newMonth]}
        </span>
        <span className={styles.headerYear}>{newYear}</span>
      </div>
      <div className={styles.headerIcons}>
        <span onClick={decreaseMonth}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </span>
        <span onClick={increaseMonth}>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
      </div>
    </div>
  );
};

Header.propTypes = {
  monthHandler: PropTypes.func,
};

export default Header;
