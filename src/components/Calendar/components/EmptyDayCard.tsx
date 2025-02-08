import styles from "../Calendar.module.css";

const EmptyDayCard = () => {
  return <div className={`${styles.calendarGrid} ${styles.empty}`} />;
};

export default EmptyDayCard;
