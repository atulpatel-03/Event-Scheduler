import constants from "@/utils/constants";
import styles from "./WeekDaysHeader.module.css";

const WeekDaysHeader = () => {
  return (
    <div className={styles.calendarHeader}>
      {constants.WEEK_DAYS.map((each_day, idx) => (
        <div
          key={idx}
          className={`${styles.calendarGrid} ${styles.weekdaysContainer}`}
        >
          <div className={styles.daysText}>{each_day}</div>
        </div>
      ))}
    </div>
  );
};

export default WeekDaysHeader;
