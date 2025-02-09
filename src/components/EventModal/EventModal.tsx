import { useSelector } from "react-redux";

import useEventModal from "./useEventModal";
import EventModalContext from "./context";
import EventModalComp from "./components/EventModalComp";
import { RootState } from "@/redux/store";

/**
 * EventModalContextComp:
 * - Wraps the modal UI inside a Context Provider.
 * - Uses `useEventModal` to get modal-related state & actions.
 * - Provides this state to `EventModalComp` via Context API.
 */

const EventModalContextComp = () => {
  const value = useEventModal();

  return (
    <EventModalContext.Provider value={value}>
      <EventModalComp />
    </EventModalContext.Provider>
  );
};

/**
 * EventModal:
 * - Selects `event_modal_details` from Redux store.
 * - Checks if the modal should be open (`is_open` flag).
 * - If open, renders `EventModalContextComp`.
 * - If not open, returns `null` to avoid rendering.
 */

const EventModal = () => {
  const event_modal_details = useSelector(
    (state: RootState) => state.event_modal_details
  );

  const { is_open } = event_modal_details;

  if (!is_open) {
    return null;
  }

  return <EventModalContextComp />;
};

export default EventModal;
