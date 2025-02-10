import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import {
  add_event,
  close_event_modal,
  remove_event,
} from "@/redux/actions/app";
import { RootState } from "@/redux/store";
import { Event } from "@/utils/type";

/**
 * Custom Hook: useEventModal
 * - Manages the event modal state (add, update, delete events)
 * - Uses Redux for state management
 * - Handles user input for event descriptions
 * - Closes the modal when actions are completed
 */

const useEventModal = () => {
  const { event_modal_details, events } = useSelector((state: RootState) => ({
    event_modal_details: state.event_modal_details,
    events: state.events,
  }));

  // Destructure event details from Redux state
  const { id, date, day, description: old_description } = event_modal_details;

  const [current_event, set_current_event] = useState<Event>();
  const [description, set_description] = useState<string>(
    old_description || ""
  );

  const dispatch = useDispatch();

  // Handles input change for the event description.
  const handle_change_descripition = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    set_description(e.target.value);
  };

  // Saves or updates an event.
  const handle_save_event = () => {
    dispatch(
      add_event({
        id: id ? id : uuidv4(),
        date,
        day,
        description,
      })
    );
    dispatch(close_event_modal());
  };

  // Deletes an event and closes the modal
  const handle_delete_event = () => {
    dispatch(remove_event(id));
    dispatch(close_event_modal());
  };

  const on_close = () => {
    dispatch(close_event_modal());
  };

  useEffect(() => {
    if (id) {
      const current_event = events.find((eve: Event) => eve.id === id);
      if (current_event) {
        set_current_event(current_event);
      }
    }
  }, [id, events]);

  return {
    event_modal_details,
    events,
    on_close,
    handle_delete_event,
    handle_save_event,
    current_event,
    description,
    handle_change_descripition,
  };
};

export default useEventModal;
