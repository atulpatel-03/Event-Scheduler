import {
  ADD_EVENT,
  REMOVE_EVENT,
  OPEN_EVENT_MODAL,
  CLOSE_EVENT_MODAL,
} from "@/redux/actions/reduxConstants";

export interface AddEventAction {
  type: typeof ADD_EVENT;
  payload: Event;
}

export interface RemoveEventAction {
  type: typeof REMOVE_EVENT;
  payload: string; // event ID
}

export interface OpenEventModalAction {
  type: typeof OPEN_EVENT_MODAL;
  payload: Event | null;
}

export interface CloseEventModalAction {
  type: typeof CLOSE_EVENT_MODAL;
}

export type AppActions =
  | AddEventAction
  | RemoveEventAction
  | OpenEventModalAction
  | CloseEventModalAction;

export type Event = {
  date: string;
  day: number;

  id?: string;
  description?: string;
};

export type EventModalDetails = {
  is_open: boolean;

  id?: string;
  date?: string;
  day?: number;
  description?: string;
};
