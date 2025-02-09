import { useDispatch, useSelector } from "react-redux";
import { useCallback, useMemo, useState } from "react";

import styles from "./AllEvents.module.css";
import { open_event_modal } from "@/redux/actions/app";
import { Event } from "@/utils/type";
import Header from "./components/Header";
import EventCard from "./components/EventCard";
import { SORT_BY_VALUES } from "./constants";
import NoEvents from "./components/NoEvents/NoEvents";
import FilterComp from "./components/FilterComp";
import { RootState } from "@/redux/store";

// AllEvents Component:
// - Displays all events with filtering & sorting options
// - Allows users to search for events by description
// - Supports sorting by date (ascending/descending)
// - Uses Redux to manage event state

const AllEvents = () => {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.events);

  const [filter_data, set_filter_data] = useState({
    search_query: "",
    sort_order: SORT_BY_VALUES.recent,
  });

  const { search_query, sort_order } = filter_data;

  // Function to handle search and sorting input changes
  const handle_on_change = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
      >
    ) => {
      const { name, value } = e.target;
      set_filter_data((prev) => ({
        ...prev,
        [name]: value,
      }));
    },
    []
  );

  // Function to filter and sort events
  const filtered_events = useMemo(() => {
    // Filter events by search query
    const filter_data = events.filter((event: Event) =>
      event.description.toLowerCase().includes(search_query.toLowerCase())
    );

    // Sort events by date if sorting is applied
    if (sort_order !== SORT_BY_VALUES.recent) {
      return filter_data.sort((a: Event, b: Event) => {
        return sort_order === SORT_BY_VALUES.asc
          ? new Date(a.date).getTime() - new Date(b.date).getTime()
          : new Date(b.date).getTime() - new Date(a.date).getTime();
      });
    }

    return filter_data;
  }, [events, search_query, sort_order]);

  // Function to open the modal for editing an event
  const handle_edit_event = useCallback(
    (selectedEvent: Event) => {
      dispatch(open_event_modal(selectedEvent));
    },
    [dispatch]
  );

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
