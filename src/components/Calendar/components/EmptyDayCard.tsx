import styles from "../Calendar.module.css";

//EmptyDayCard used to show empty days
const EmptyDayCard = () => {
  return <div className={`${styles.calendarGrid} ${styles.empty}`} />;
};

export default EmptyDayCard;
