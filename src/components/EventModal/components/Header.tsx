import styles from "../EventModal.module.css";
import Icons from "@/utils/Icons";
import EventModalContext from "../context";
import { useContext } from "react";

/**
 * Modal Header:
 * - Uses EventModalContext for state and actions.
 */

const Header = () => {
  const { current_event, on_close } = useContext(EventModalContext);

  return (
    <div className={styles.header}>
      <h3>{current_event ? "Edit Event" : "Add Event"}</h3>
      <div onClick={on_close}>
        <Icons.CloseIcon />
      </div>
    </div>
  );
};

export default Header;
