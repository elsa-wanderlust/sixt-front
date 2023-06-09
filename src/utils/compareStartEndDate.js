// receives 2 dates under format 2023-06-13T12:30:00 (the timing are incorrect as coming from calendar)
// returns false if end date is equal or prior the start date

const compareStartEndDate = (startDate, endDate) => {
  // extract the date part
  const startDateFormat = new Date(startDate).toLocaleDateString("en-us", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const endDateFormat = new Date(endDate).toLocaleDateString("en-us", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  // change into date format and substract
  const compare = new Date(endDateFormat) - new Date(startDateFormat);
  if (compare <= 0) {
    return false;
  } else {
    return true;
  }
};

export default compareStartEndDate;
