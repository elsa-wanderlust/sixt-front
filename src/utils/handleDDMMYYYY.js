// receives as argument date under format: Tue Jun 13 2023 00:00:00 GMT+0200 (Central European Summer Time)
// returns date under format 13/06/2023

const handleDDMMYYYY = (date) => {
  const dateFormat = new Date(date).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  return dateFormat;
};

export default handleDDMMYYYY;
