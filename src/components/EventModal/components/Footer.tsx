import { useContext } from "react";

import styles from "../EventModal.module.css";
import EventModalContext from "../context";
import ActionButton from "@/components/ActionButton/ActionButton";

/**
 * Footer Component:
 * - Displays action buttons for the event modal.
 * - Shows "Delete" if an event exists, otherwise "Close".
 * - Shows "Update" if an event exists, otherwise "Add".
 * - Uses EventModalContext for state and actions.
 */

const Footer = () => {
  const { current_event, on_close, handle_save_event, handle_delete_event } =
    useContext(EventModalContext);

  return (
    <div className={styles.modalFooter}>
      {current_event ? (
        <ActionButton
          className={styles.deleteBtn}
          onClick={handle_delete_event}
          label="Delete"
        />
      ) : (
        <ActionButton
          className={styles.closeBtn}
          onClick={on_close}
          label="Close"
        />
      )}
      <ActionButton
        className={styles.primaryBtn}
        onClick={handle_save_event}
        label={current_event ? "Update" : "Add"}
      />
    </div>
  );
};

export default Footer;
