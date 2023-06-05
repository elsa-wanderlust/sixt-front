// import from react and package(s)
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import style
import "./searchFieldSection.css";
// import component(s)
import AutoComplete from "../AutoComplete";
import DateSelect from "../DateSelect";
import TimeSelect from "../TimeSelect";
import SelectButton from "../SelectButton";
// import function(s)
import dateTimeFormat from "../../utils/dateTimeFormat";
import rentalLength from "../../utils/rentalLength";

const SearchFieldSection = ({ setOffers, setRentalLength }) => {
  // declare state(s)
  const [selectedLocation, setSelectedLocation] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  // declare variable(s)
  const navigate = useNavigate(); // rappel
  // declare function(s)
  const handleSubmit = async () => {
    const pickUpDate = dateTimeFormat(startDate, startTime);
    const dropOffDate = dateTimeFormat(endDate, endTime);
    const pickUpStation = selectedLocation.id;
    const query = `?pickupStation=${pickUpStation}&pickupDate=${pickUpDate}&returnDate=${dropOffDate}
`;
    const daysOfRental = rentalLength(pickUpDate, dropOffDate);
    try {
      const response = await axios.get(
        `http://localhost:3000/agency/offer${query}`
      );
      setOffers(response.data);
      setRentalLength(daysOfRental);
      navigate("/offerList");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="searchFieldSection">
      <div className="agencySearch">
        <p className="label">Retrait et Retour</p>
        <div>
          <AutoComplete
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
          />
        </div>
      </div>
      <div className="dateSelect">
        <p className="label">Date de départ</p>
        <DateSelect
          state={startDate}
          setState={setStartDate}
          minDate={new Date()}
          maxDate={endDate}
          shownDate={startDate}
        />
      </div>
      <div className="timeSelect">
        <TimeSelect state={startTime} setState={setStartTime} />
      </div>
      <div className="dateSelect">
        <p className="label">Date de retour</p>
        <DateSelect
          state={endDate}
          setState={setEndDate}
          minDate={startDate}
          shownDate={startDate}
        />
      </div>
      <div className="timeSelect">
        <TimeSelect state={endTime} setState={setEndTime} />
      </div>
      <SelectButton title="Voir les offres" func={handleSubmit} type="orange" />
    </div>
  );
};

export default SearchFieldSection;
