import {
  add_event,
  close_event_modal,
  remove_event,
} from "@/redux/actions/app";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const useEventModal = () => {
  const { event_modal_details, events } = useSelector((state: any) => ({
    event_modal_details: state.event_modal_details,
    events: state.events,
  }));

  const { id, date, day, description: old_description } = event_modal_details;

  const [current_event, set_current_event] = useState<Event>();
  const [description, set_description] = useState<string>(
    old_description || ""
  );

  const dispatch = useDispatch();

  const handle_change_descripition = (e: any) => {
    set_description(e.target.value);
  };

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

  const handle_delete_event = () => {
    dispatch(remove_event(id));
    dispatch(close_event_modal());
  };

  const on_close = () => {
    dispatch(close_event_modal());
  };

  useEffect(() => {
    if (id) {
      const current_event = events.filter((e: Event) => e.id === id);
      set_current_event(current_event);
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
