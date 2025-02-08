import { legacy_createStore as createStore, Store } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistPartial } from "redux-persist/es/persistReducer";

import { AppActions } from "@/utils/type";
import app, { AppState } from "./reducers/app";

const persistConfig: PersistConfig<AppState> = {
  key: "root",
  storage,
  whitelist: ["events"],
};

const persistedReducer = persistReducer<AppState, AppActions>(
  persistConfig,
  app
);

export const store: Store<AppState & PersistPartial, AppActions> =
  createStore(persistedReducer);

export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
