import { legacy_createStore as createStore, Store } from "redux";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistPartial } from "redux-persist/es/persistReducer";

import { AppActions } from "@/utils/type";
import app, { AppState } from "./reducers/app";

/**
 * Redux Persist Configuration:
 * - `key`: The root key for the persisted state.
 * - `storage`: Defines where to store data (localStorage by default).
 * - `whitelist`: Specifies which parts of the state should persist.
 */

const persistConfig: PersistConfig<AppState> = {
  key: "root",
  storage,
  whitelist: ["events"],
};

/**
 * Create a persisted reducer using redux-persist.
 * - Wraps the app reducer to enable persistence.
 */

const persistedReducer = persistReducer<AppState, AppActions>(
  persistConfig,
  app
);

/**
 * Redux Store:
 * - Uses the persisted reducer to store data.
 * - Includes typings for state and actions.
 */

export const store: Store<AppState & PersistPartial, AppActions> =
  createStore(persistedReducer);

/**
 * RootState Type:
 * - Infers the type of the Redux store's state.
 * - Useful for typing `useSelector` in React components.
 */

export type RootState = ReturnType<typeof store.getState>;

/**
 * Persistor:
 * - Enables Redux-Persist to manage state persistence.
 */

export const persistor = persistStore(store);
