const utils = {
  // get the total days in a particular month
  get_days_in_month: (month: number, year: number): (number | null)[] => {
    const days: (number | null)[] = [];
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    let day = 1;

    // Create empty slots for the first week
    for (let i = 0; i < firstDay; i++) {
      days.push(null);
    }

    // Add the days of the current month
    while (day <= lastDate) {
      days.push(day);
      day++;
    }

    return days;
  },

  // get the date in YYYY-MM-DD formate
  get_formatted_date: (currentDate: Date, selectedDay: number) => {
    const year = currentDate.getFullYear();
    const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
    const day = selectedDay.toString().padStart(2, "0");

    // Format the date as YYYY-MM-DD
    return `${year}-${month}-${day}`;
  },

  // Format the date as "5 Feb 2025"
  get_display_format_date: (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  },
};

export default utils;
