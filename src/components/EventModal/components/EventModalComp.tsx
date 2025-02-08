import { useContext } from "react";
import styles from "../EventModal.module.css";
import Footer from "./Footer";
import Header from "./Header";
import EventModalContext from "../context";

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
