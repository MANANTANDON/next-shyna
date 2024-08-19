export function formatDateToDayMonth(dateString) {
  const date = new Date(dateString);

  // Array of short day names
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Array of short month names
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get the day, month, and year
  const dayName = dayNames[date.getUTCDay()];
  const day = date.getUTCDate();
  const monthName = monthNames[date.getUTCMonth()];

  return `${dayName} ${day} ${monthName}`;
}
