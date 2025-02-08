import { Event } from "../type";
import styles from "../AllEvents.module.css";
import Icons from "@/utils/Icons";
import utils from "@/utils/utils";

interface Props {
  event_details: Event;
  index: number;
  handle_edit_event: () => void;
}

const EventCard = ({ event_details, index, handle_edit_event }: Props) => {
  const { date, description } = event_details;

  return (
    <div className={styles.eventRow}>
      <div className={`${styles.eventData} ${styles.eventItem}`}>
        {index + 1}
      </div>
      <div className={`${styles.eventData} ${styles.eventItem}`}>
        {" "}
        {utils.get_display_format_date(date)}
      </div>
      <div className={`${styles.eventData} ${styles.eventItem}`}>
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
