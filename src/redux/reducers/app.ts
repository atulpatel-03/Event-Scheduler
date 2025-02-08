import { AppActions, Event, EventModalDetails } from "@/utils/type";
import {
  ADD_EVENT,
  REMOVE_EVENT,
  OPEN_EVENT_MODAL,
  CLOSE_EVENT_MODAL,
} from "../actions/reduxConstants";

export interface AppState {
  events: Event[];
  event_modal_details: EventModalDetails;
}

const initial_modal_details = {
  is_open: false,
  id: "",
  date: "",
  day: 1,
  description: "",
};

// Define the initial state
const initial_state: AppState = {
  events: [],
  event_modal_details: initial_modal_details,
};

// Define the reducer
const app = (state: AppState = initial_state, action: AppActions) => {
  switch (action.type) {
    case ADD_EVENT:
      const existing_event_idx = state.events.findIndex(
        (event: Event) => event.id === action.payload.id
      );

      if (existing_event_idx !== -1) {
        const updatedEvents = state.events.map((event: Event) =>
          event.id === action.payload.id ? action.payload : event
        );
        return { ...state, events: updatedEvents };
      } else {
        return { ...state, events: [action.payload, ...state.events] };
      }

    case REMOVE_EVENT:
      return {
        ...state,
        events: state.events.filter(
          (event: Event) => event.id !== action.payload
        ),
      };

    case OPEN_EVENT_MODAL:
      return {
        ...state,
        event_modal_details: { is_open: true, ...action.payload },
      };

    case CLOSE_EVENT_MODAL:
      return {
        ...state,
        event_modal_details: initial_modal_details,
      };

    default:
      return state;
  }
};

export default app;
