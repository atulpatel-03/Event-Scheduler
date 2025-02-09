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
import { RootState } from "@/redux/store";

// Calendar Component:
// - Displays a monthly calendar view
// - Allows users to select days, add/edit/delete events
// - Supports navigation between months and years
// - Uses Redux to manage event state

const Calendar = () => {
  const [current_date, set_current_date] = useState<Date>(new Date());

  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.events);

  // Compute the days of the selected month (cached with useMemo for performance)
  const days = useMemo(() => {
    return utils.get_days_in_month(
      current_date.getMonth(),
      current_date.getFullYear()
    );
  }, [current_date]);

  // Function to change the month based on direction (+1: next month, -1: previous month)
  const change_month = (direction: number) => {
    set_current_date((prev) => {
      const new_date = new Date(prev);
      new_date.setMonth(prev.getMonth() + direction);
      return new_date;
    });
  };

  // Function to change the year based on direction (+1: next year, -1: previous year)
  const change_year = (direction: number) => {
    set_current_date((prev) => {
      const new_date = new Date(prev);
      new_date.setFullYear(prev.getFullYear() + direction);
      return new_date;
    });
  };

  // Function to handle when a user selects a day to add an event
  const handle_select_date = (selected_day: number) => {
    // Format the date as YYYY-MM-DD
    const formatted_date = utils.get_formatted_date(current_date, selected_day);
    dispatch(
      open_event_modal({
        date: formatted_date,
        day: selected_day,
        id: "",
        description: "",
      })
    );
  };

  // Function to handle when a user edits an existing event
  const handle_edit_event = (selected_event: Event) => {
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

            const formatted_date = utils.get_formatted_date(current_date, day);
            const filtered_events = events.filter(
              (event: Event) =>
                event.day === day && event.date === formatted_date
            );

            // Determine if the day is today
            const today = new Date();
            today.setHours(0, 0, 0, 0); // Reset to midnight

            const selected_date = new Date(current_date);
            selected_date.setDate(day);
            selected_date.setHours(0, 0, 0, 0); // Reset to midnight

            const is_today = selected_date.getTime() === today.getTime();

            return (
              <DayCard
                key={idx}
                day={day}
                handle_date_select={handle_select_date}
                events={filtered_events}
                handle_edit_event={handle_edit_event}
                is_today={is_today}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
