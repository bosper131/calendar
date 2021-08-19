import Calendar from "../../components/Calendar/Calendar";
import styles from "./Root.module.css";

const Root = () => {
  return (
    <div className={styles.container}>
      <Calendar />
    </div>
  );
};

export default Root;
