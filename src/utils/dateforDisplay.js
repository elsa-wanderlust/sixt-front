// receives date under format 2023-06-13T12:30:00
// returns under format 13 juin 12:30

const dateForDisplay = (date) => {
  const dateDisplay = new Date(date).toLocaleDateString("fr-fr", {
    day: "numeric",
    month: "short",
  });
  const timeDisplay = new Date(date).toLocaleTimeString("fr-fr", {
    hour: "numeric",
    minute: "numeric",
  });
  return `${dateDisplay} ${timeDisplay}`;
};

export default dateForDisplay;
