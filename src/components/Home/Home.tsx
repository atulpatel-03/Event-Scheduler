import React from "react";
import Link from "next/link";

import styles from "./Home.module.css";

const HomeScreen = () => {
  return (
    <div className={styles.homeScreen}>
      <h1>Welcome to Event Scheduler</h1>
      <p>
        The Event Scheduler helps you manage your events efficiently. View your
        calendar, add new events, and keep track of important dates.
      </p>
      <Link href="/calendar" className={styles.eventBtn}>
        Go to Event Scheduler
      </Link>
    </div>
  );
};

export default HomeScreen;
