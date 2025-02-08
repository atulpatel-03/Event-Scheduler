import {
  ADD_EVENT,
  CLOSE_EVENT_MODAL,
  OPEN_EVENT_MODAL,
  REMOVE_EVENT,
} from "./reduxConstants";

export const add_event = (event: {
  id: string;
  day: number;
  date: string;
  description: string;
}) => ({
  type: ADD_EVENT,
  payload: event,
});

export const remove_event = (id: string) => ({
  type: REMOVE_EVENT,
  payload: id,
});

export const open_event_modal = (current_event: {
  day: number;
  date: string;

  id?: string;
  description?: string;
}) => ({
  type: OPEN_EVENT_MODAL,
  payload: current_event,
});

export const close_event_modal = () => ({
  type: CLOSE_EVENT_MODAL,
});
