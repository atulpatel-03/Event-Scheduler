import Link from "next/link";

import styles from "./NoEvents.module.css";

const NoEvents = () => {
  return (
    <div className={styles.emptyScreenContainer}>
      <div className={styles.emptyState}>
        <h3>No events added yet</h3>
        <p>Start by adding your first event.</p>
        <Link href="/calendar" className={styles.addEventButton}>
          + Add Event
        </Link>
      </div>
    </div>
  );
};

export default NoEvents;
