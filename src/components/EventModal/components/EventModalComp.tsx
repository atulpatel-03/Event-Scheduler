import { useContext } from "react";
import styles from "../EventModal.module.css";
import Footer from "./Footer";
import Header from "./Header";
import EventModalContext from "../context";

/**
 * EventModalComp:
 * - Renders the event modal UI.
 * - Includes:
 *   - Header (title, close button).
 *   - Textarea for event description.
 *   - Footer (Save, Update, Delete buttons).
 * - Uses EventModalContext to get modal state & handlers.
 */

const EventModalComp = () => {
  const { description, handle_change_descripition } =
    useContext(EventModalContext);

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modal}>
        <Header />
        <div className={styles.bodyContainer}>
          <textarea
            className={styles.textArea}
            value={description}
            onChange={handle_change_descripition}
            placeholder="Event Description"
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default EventModalComp;
