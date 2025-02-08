import React from "react";
import useEventModal from "./useEventModal";

type Props = ReturnType<typeof useEventModal>;

const EventModalContext = React.createContext<Props>({} as Props);

export default EventModalContext;
