import { AnyAction } from "redux";

import {
  ADD_EVENT,
  REMOVE_EVENT,
  OPEN_EVENT_MODAL,
  CLOSE_EVENT_MODAL,
} from "@/redux/actions/reduxConstants";

export interface AddEventAction extends AnyAction {
  type: typeof ADD_EVENT;
  payload: Event;
}

export interface RemoveEventAction extends AnyAction {
  type: typeof REMOVE_EVENT;
  payload: string;
}

export interface OpenEventModalAction extends AnyAction {
  type: typeof OPEN_EVENT_MODAL;
  payload: Event;
}

export interface CloseEventModalAction extends AnyAction {
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
  id: string;
  description: string;
};

export type EventModalDetails = {
  is_open: boolean;
  id: string;
  date: string;
  day: number;
  description: string;
};
