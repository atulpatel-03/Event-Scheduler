import { useDispatch, useSelector } from "react-redux";
import { useMemo, useState } from "react";

import styles from "./AllEvents.module.css";
import { open_event_modal } from "@/redux/actions/app";
import { Event } from "./type";
import Header from "./components/Header";
import EventCard from "./components/EventCard";
import { SORT_BY_VALUES } from "./constants";
import NoEvents from "./components/NoEvents/NoEvents";
import FilterComp from "./components/FilterComp";

const AllEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector<{ events: Event[] }, Event[]>(
    (state) => state.events
  );

  const [filter_data, set_filter_data] = useState({
    search_query: "",
    sort_order: SORT_BY_VALUES.recent,
  });

  const { search_query, sort_order } = filter_data;

  const handle_on_change = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    set_filter_data((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filtered_events = useMemo(() => {
    const filter_data = events.filter((event: Event) =>
      event.description.toLowerCase().includes(search_query.toLowerCase())
    );

    if (sort_order !== SORT_BY_VALUES.recent) {
      return filter_data.sort((a: Event, b: Event) => {
        return sort_order === SORT_BY_VALUES.asc
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    }

    return filter_data;
  }, [events, search_query, sort_order]);

  const handle_edit_event = (selectedEvent: Event) => {
    dispatch(open_event_modal(selectedEvent));
  };

  if (events.length === 0) {
    return <NoEvents />;
  }

  return (
    <div className={styles.eventsContainer}>
      <FilterComp
        handle_on_change={handle_on_change}
        filter_data={filter_data}
      />
      <Header />

      <div className={styles.eventList}>
        {filtered_events.length > 0 ? (
          filtered_events.map((each_event: Event, idx: number) => (
            <EventCard
              key={idx}
              index={idx}
              event_details={each_event}
              handle_edit_event={() => handle_edit_event(each_event)}
            />
          ))
        ) : (
          <p className={styles.noEvents}>No events found.</p>
        )}
      </div>
    </div>
  );
};

export default AllEvents;
