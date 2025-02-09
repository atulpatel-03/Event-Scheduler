import { Event } from "@/utils/type";
import styles from "../AllEvents.module.css";
import Icons from "@/utils/Icons";
import utils from "@/utils/utils";

interface Props {
  event_details: Event;
  index: number;
  handle_edit_event: () => void;
}

// EventCard use to show each events with editable functionality
const EventCard = ({ event_details, index, handle_edit_event }: Props) => {
  const { date, description } = event_details;

  return (
    <div className={styles.eventRow}>
      <div className={`${styles.eventData} ${styles.eventItem}`}>
        {index + 1}
      </div>
      <div
        className={`${styles.eventData} ${styles.eventItem} ${styles.dateItem}`}
      >
        {" "}
        {utils.get_display_format_date(date)}
      </div>
      <div
        className={`${styles.eventData} ${styles.eventItem} ${styles.descriptionItem}`}
      >
        {description}
      </div>
      <div className={`${styles.eventData} ${styles.eventItem}`}>
        <button className={styles.editIcon} onClick={handle_edit_event}>
          <Icons.EditNoteIcon />
          <div className={styles.editText}>Edit</div>
        </button>
      </div>
    </div>
  );
};

export default EventCard;
