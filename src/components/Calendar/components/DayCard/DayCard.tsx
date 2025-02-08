import { Event } from "@/utils/type";

import styles from "./DayCard.module.css";

interface DayCardProps {
  events: Event[];
  day: number;
  handle_date_select: (day: number) => void;
  handle_edit_event: (item: Event) => void;
  is_today: boolean;
}

const DayCard = ({
  events,
  day,
  handle_date_select,
  handle_edit_event,
  is_today,
}: DayCardProps) => {
  const handle_day_click = (e: React.MouseEvent) => {
    e.stopPropagation();
    handle_date_select(day);
  };

  const handle_event_click = (event: Event, e: React.MouseEvent) => {
    e.stopPropagation();
    handle_edit_event(event);
  };

  return (
    <div
      className={`${styles.dayContainer} ${
        is_today ? styles.todayContainer : ""
      }`}
      onClick={handle_day_click}
    >
      <div className={styles.daysText}>{day}</div>
      <div className={styles.eventsContainer}>
        {events.map((event) => (
          <div
            key={event.id}
            onClick={(e) => handle_event_click(event, e)}
            className={styles.eventMarker}
          >
            <span>{event.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DayCard;
