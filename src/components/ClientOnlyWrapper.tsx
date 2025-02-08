"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { store, persistor } from "../redux/store";
import Navbar from "./Navbar/Navbar";
import EventModal from "./EventModal/EventModal";

interface Props {
  children: React.ReactNode;
}

const ClientOnlyWrapper = ({ children }: Props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        <main>{children}</main>
        <EventModal />
      </PersistGate>
    </Provider>
  );
};

export default ClientOnlyWrapper;
