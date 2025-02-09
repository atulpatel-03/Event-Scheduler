import styles from "../AllEvents.module.css";

// Table Header
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={`${styles.eventHeading} ${styles.eventItem}`}>S.No</div>
      <div className={`${styles.eventHeading} ${styles.eventItem}`}>Date</div>
      <div className={`${styles.eventHeading} ${styles.eventItem}`}>
        Description
      </div>
      <div className={`${styles.eventHeading} ${styles.eventItem}`}>Action</div>
    </div>
  );
};

export default Header;
