// import from react and package(s)
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import { Calendar } from "react-date-range";
import fr from "date-fns/locale/fr";
// import function(s)
import calendarDateDisplay from "../../utils/calendarDateDisplay";

const DateSelect = ({ state, setState, minDate, maxDate, shownDate, page }) => {
  const [calendarDisplay, setCalendaryDisplay] = useState(false); // if the calendar is showing or not
  let dateDisplay = calendarDateDisplay(state); // date - always on display

  const handleSelect = (date) => {
    setState(date);
    setCalendaryDisplay(false);
  };

  const handleClick = () => {
    if (page !== "offerConfig") {
      setCalendaryDisplay(true);
    }
  };

  return (
    <div className="calendarContainer">
      {!calendarDisplay && (
        <p onClick={handleClick} className="dateSelected">
          {dateDisplay && dateDisplay}
        </p>
      )}
      {calendarDisplay && (
        <div className="calendar">
          <Calendar
            date={state}
            onChange={handleSelect}
            minDate={minDate}
            locale={fr}
            shownDate={shownDate}
            maxDate={maxDate && maxDate}
            color="#ff5f00"
          />
        </div>
      )}
    </div>
  );
};
export default DateSelect;
