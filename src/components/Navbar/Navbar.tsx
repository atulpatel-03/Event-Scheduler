import React, { useState } from "react";
import Link from "next/link";

import styles from "./Navbar.module.css";
import Icons from "@/utils/Icons";

/**
 * Navbar Component:
 * - Displays navigation links for the app.
 * - Contains a mobile-friendly menu toggle.
 */

const Navbar = () => {
  const [menu_open, set_menu_open] = useState<boolean>(false);

  const open_menu = () => {
    set_menu_open(!menu_open);
  };

  return (
    <nav className={styles.navbar}>
      {/* Mobile menu icon (hamburger or close) */}
      <div className={styles.mobileView} onClick={open_menu}>
        {menu_open ? (
          <Icons.CloseIcon style={{ color: "white" }} />
        ) : (
          <Icons.MenuIcon style={{ color: "white" }} />
        )}
      </div>
      <Link
        href="/"
        className={`${styles.navbarLeft} ${menu_open ? styles.open : ""}`}
      >
        Event Scheduler
      </Link>
      <div className={`${styles.navbarRight}  ${menu_open ? styles.open : ""}`}>
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
