import React from "react";
import Link from "next/link";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={styles.navbarLeft}>
        Event Scheduler
      </Link>
      <div className={styles.navbarRight}>
        <Link href="/calendar" className={styles.navbarLink}>
          Calendar
        </Link>
        <Link href="/events" className={styles.navbarLink}>
          Scheduled Events
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
