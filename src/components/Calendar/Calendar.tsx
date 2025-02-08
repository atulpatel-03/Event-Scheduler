import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import utils from "@/utils/utils";
import constants from "@/utils/constants";
import styles from "./Calendar.module.css";
import DayCard from "./components/DayCard/DayCard";
import Header from "./components/Header/Header";
import { open_event_modal } from "@/redux/actions/app";
import { Event } from "@/utils/type";
import EmptyDayCard from "./components/EmptyDayCard";
import WeekDaysHeader from "./components/WeekDaysHeader/WeekDaysHeader";

const Calendar = () => {
  const [current_date, set_current_date] = useState<Date>(new Date());

  const dispatch = useDispatch();
  const events = useSelector<{ events: Event[] }, Event[]>(
    (state) => state.events
  );

  const days = useMemo(() => {
    return utils.get_days_in_month(
      current_date.getMonth(),
      current_date.getFullYear()
    );
  }, [current_date]);

  const change_month = (direction: number) => {
    set_current_date((prev) => {
      const newDate = new Date(prev);
      newDate.setMonth(prev.getMonth() + direction);
      return newDate;
    });
  };

  const change_year = (direction: number) => {
    set_current_date((prev) => {
      const newDate = new Date(prev);
      newDate.setFullYear(prev.getFullYear() + direction);
      return newDate;
    });
  };

  const handle_select_date = (selectedDay: number) => {
    // Format the date as YYYY-MM-DD
    const formatted_date = utils.get_formated_date(current_date, selectedDay);

    if (selectedDay !== null) {
      dispatch(
        open_event_modal({
          date: formatted_date,
          day: selectedDay,
        })
      );
    }
  };

  const handle_edit_evet = (selected_event: Event) => {
    dispatch(open_event_modal(selected_event));
  };

  return (
    <div className={styles.calendarContainer}>
      <Header
        change_month={change_month}
        change_year={change_year}
        heading={`${
          constants.MONTH_NAMES[current_date.getMonth()]
        } ${current_date.getFullYear()}`}
      />
      <WeekDaysHeader />
      <div className={styles.calendarHeaderContainer}>
        <div className={styles.calendarGrid}>
          {days.map((day, idx) => {
            if (day === null) {
              return <EmptyDayCard key={idx} />;
            }

            const formatted_date = utils.get_formated_date(current_date, day);
            const filteredEvents = events.filter(
              (event: Event) =>
                event.day === day && event.date === formatted_date
            );

            return (
              <DayCard
                key={idx}
                day={day}
                handle_date_select={handle_select_date}
                events={filteredEvents}
                handle_edit_event={handle_edit_evet}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
