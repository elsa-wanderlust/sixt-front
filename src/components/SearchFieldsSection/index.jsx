// import from react and package(s)
import { useState } from "react";
// import component(s)
import AutoComplete from "../AutoComplete";
import DateSelect from "../DateSelect";

const SearchFieldSection = () => {
  const [selectedLocation, setSelectedLocation] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();

  return (
    <>
      <AutoComplete
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />

      <DateSelect
        state={startDate}
        setState={setStartDate}
        minDate={new Date()}
        maxDate={endDate}
        shownDate={startDate}
      />
      <DateSelect
        state={endDate}
        setState={setEndDate}
        minDate={startDate}
        shownDate={startDate}
      />
    </>
  );
};

export default SearchFieldSection;
