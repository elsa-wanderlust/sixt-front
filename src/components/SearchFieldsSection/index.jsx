// import from react and package(s)
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import style
import "./searchFieldSection.scss";
// import component(s)
import AutoComplete from "../AutoComplete";
import DateSelect from "../DateSelect";
import TimeSelect from "../TimeSelect";
import SelectButton from "../SelectButton";
// import function(s)
import dateTimeFormat from "../../utils/dateTimeFormat";
import calcRentalLength from "../../utils/calcRentalLength";
import compareStartEndDate from "../../utils/compareStartEndDate";

const SearchFieldSection = ({
  errorMessage,
  setErrorMessage,
  setOffers,
  setRentalLength,
  page,
  setPage,
  selectedLocation,
  setSelectedLocation,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  startTime,
  setStartTime,
  endTime,
  setEndTime,
  setIsLoading,
}) => {
  // declare state and variable
  // const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  // declare submit (when on the home page)
  const handleSubmit = () => {
    setPage("offerList");
    navigate("/offerlist");
  };
  // functions to check all the fields are filled, and correctly (Home Page)
  const isNotValid = () => {
    if (
      !selectedLocation ||
      !startDate ||
      !startTime ||
      !endDate ||
      endTime.value === "..."
    ) {
      return true;
    } else if (compareStartEndDate(startDate, endDate) === false) {
      return true;
    } else {
      return false;
    }
  };

  // declare useEffect (when on the offerList page)
  useEffect(() => {
    const fetchData = async () => {
      const pickUpDate = dateTimeFormat(startDate, startTime.value);
      const dropOffDate = dateTimeFormat(endDate, endTime.value);
      const pickUpStation = selectedLocation.id;
      const query = `?pickupStation=${pickUpStation}&pickupDate=${pickUpDate}&returnDate=${dropOffDate}`;
      const daysOfRental = calcRentalLength(pickUpDate, dropOffDate);
      try {
        const response = await axios.get(
          `https://site--sixt-certification--7lpgx9xk8rh5.code.run/agency/offer${query}`
        );
        setErrorMessage("");
        setOffers(response.data);
        setIsLoading(false);
        setRentalLength(daysOfRental);
      } catch (error) {
        setErrorMessage(error.response.data.message);
        setPage("home");
        navigate("/");
      }
    };
    if (page === "offerList") {
      fetchData();
    }
  }, [selectedLocation, startDate, endDate, startTime, endTime]);
  return (
    <div>
      <div>
        <>{errorMessage && <p className="errorMessage">{errorMessage}</p>}</>
      </div>
      <div className="searchFieldSection">
        <div className="agencySearch">
          <p className="label">Retrait et retour</p>
          <div>
            <AutoComplete
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              page={page}
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
            page={page}
          />
        </div>
        <div className="timeSelect">
          <TimeSelect state={startTime} setState={setStartTime} page={page} />
        </div>
        <div className="dateSelect">
          <p className="label">Date de retour</p>
          <DateSelect
            state={endDate}
            setState={setEndDate}
            minDate={startDate}
            shownDate={startDate}
            page={page}
          />
        </div>
        <div className="timeSelect">
          <TimeSelect state={endTime} setState={setEndTime} page={page} />
        </div>
        <div className="selectButtonContainer">
          {page === "home" && (
            <SelectButton
              title="Voir les offres"
              func={handleSubmit}
              type="orange"
              disabled={isNotValid()}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFieldSection;
