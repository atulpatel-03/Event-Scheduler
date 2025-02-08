import { useSelector } from "react-redux";

import useEventModal from "./useEventModal";
import EventModalContext from "./context";
import EventModalComp from "./components/EventModalComp";
import { RootState } from "@/redux/store";

const EventModalContextComp = () => {
  const value = useEventModal();

  return (
    <EventModalContext.Provider value={value}>
      <EventModalComp />
    </EventModalContext.Provider>
  );
};

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
