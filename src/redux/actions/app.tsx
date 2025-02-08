import {
  ADD_EVENT,
  CLOSE_EVENT_MODAL,
  OPEN_EVENT_MODAL,
  REMOVE_EVENT,
} from "./reduxConstants";

import { Event } from "@/utils/type";

export const add_event = (event: Event) => ({
  type: ADD_EVENT,
  payload: event,
});

export const remove_event = (id: string) => ({
  type: REMOVE_EVENT,
  payload: id,
});

export const open_event_modal = (current_event: Event) => ({
  type: OPEN_EVENT_MODAL,
  payload: current_event,
});

export const close_event_modal = () => ({
  type: CLOSE_EVENT_MODAL,
});
