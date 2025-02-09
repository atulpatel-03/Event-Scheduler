import styles from "./Header.module.css";

interface Props {
  heading: string;
  change_month: (direction: number) => void;
  change_year: (direction: number) => void;
}

// Header component for month/year navigation
const Header = ({ heading, change_month, change_year }: Props) => {
  return (
    <div className={styles.calendarHeaderContainer}>
      <button className={styles.btn} onClick={() => change_year(-1)}>
        &lt;&lt;
      </button>
      <button className={styles.btn} onClick={() => change_month(-1)}>
        &lt;
      </button>
      <div className={styles.calendarHeader}>
        <h2 className={styles.calendarHeaderText}>{heading}</h2>
      </div>
      <button className={styles.btn} onClick={() => change_month(1)}>
        &gt;
      </button>
      <button className={styles.btn} onClick={() => change_year(1)}>
        &gt;&gt;
      </button>
    </div>
  );
};

export default Header;
