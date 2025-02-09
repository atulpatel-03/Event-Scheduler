import React from "react";
import Link from "next/link";

import styles from "./Home.module.css";

/**
 * HomeScreen Component:
 * - Serves as the landing page for the Event Scheduler app.
 * - Provides navigation to the Calendar and Events pages.
 */

const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <h1>Welcome to Event Scheduler</h1>
      <p>
        The Event Scheduler helps you manage your events efficiently. View your
        calendar, add new events, and keep track of important dates.
      </p>
      <div className={styles.buttonContainer}>
        <Link href="/calendar" className={styles.eventBtn}>
          Schedule Event
        </Link>

        <Link href="/events" className={styles.eventBtnSecondary}>
          Already Scheduled Events
        </Link>
      </div>
    </div>
  );
};

export default HomeScreen;
