// receives as argument date under format: Tue Jun 13 2023 00:00:00 GMT+0200 (Central European Summer Time)
// receives as argument time under format: T12:30:00
// returns dateTime under format 2023-06-13T12:30:00

const dateTimeFormat = (date, time) => {
  const dateFormat = new Date(date).toLocaleDateString("fr-CA", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const dateTime = dateFormat + time;
  return dateTime;
};

export default dateTimeFormat;
