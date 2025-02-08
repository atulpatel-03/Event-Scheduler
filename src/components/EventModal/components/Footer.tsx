import styles from "../EventModal.module.css";
import { useContext } from "react";
import EventModalContext from "../context";

const Footer = () => {
  const { current_event, on_close, handle_save_event, handle_delete_event } =
    useContext(EventModalContext);

  return (
    <div className={styles.modalFooter}>
      {current_event ? (
        <button
          className={`${styles.btn} ${styles.deleteBtn}`}
          onClick={handle_delete_event}
        >
          Delete
        </button>
      ) : (
        <button
          className={`${styles.btn}  ${styles.closeBtn}`}
          onClick={on_close}
        >
          Close
        </button>
      )}
      <button
        className={`${styles.btn} ${styles.primaryBtn}`}
        onClick={handle_save_event}
      >
        {current_event ? "Update" : "Add"}
      </button>
    </div>
  );
};

export default Footer;
