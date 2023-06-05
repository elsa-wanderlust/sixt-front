// receives as argument date under format : Tue Jun 13 2023 00:00:00 GMT+0200 (Central European Summer Time)
// returns date as format : 13 juin (in French)

const calendarDateDisplay = (date) => {
  let dateDisplay;
  if (date) {
    dateDisplay = new Date(date).toLocaleDateString("fr-fr", {
      day: "numeric",
      month: "short",
    });
  } else {
    dateDisplay = "-----";
  }
  return dateDisplay;
};

export default calendarDateDisplay;
