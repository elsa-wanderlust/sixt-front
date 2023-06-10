// import from react and package(s)
import React from "react";
import { useState } from "react";
import axios from "axios";
import AsyncSelect from "react-select/async";
// import function
import customStyleAgencyTime from "../../utils/selectCustomStyle_AgencyTime";

const AutoComplete = ({ selectedLocation, setSelectedLocation, page }) => {
  const [inputValue, setInputValue] = useState("");

  // handle inputValue change
  const handleInput = (input) => {
    setInputValue(input);
  };
  // handle selection
  const handleSelect = (event) => {
    setSelectedLocation(event);
  };
  // get location option depending on inputValue
  const getAgencyList = async (inputValue) => {
    if (inputValue.length > 2) {
      try {
        // change the input value in a query format
        const queryTab = inputValue.split(" ");
        let query = "q=";
        for (let i = 0; i < queryTab.length; i++) {
          if (i === 0) {
            query = query + queryTab[i] + "%20";
          } else if (i === queryTab.length - 1) {
            query = query + queryTab[i];
          } else {
            query = query + queryTab[i] + "%20";
          }
        }
        const response = await axios.get(
          `https://site--sixt-certification--7lpgx9xk8rh5.code.run/agency/list?${query}`
        );
        return response.data;
      } catch (error) {
        console.log(error.response.data.message);
      }
    }
  };

  const style = customStyleAgencyTime();

  return (
    <AsyncSelect
      noOptionsMessage={() => "merci de rentrer votre destination"}
      loadingMessage={() => "chargement..."}
      styles={style}
      onInputChange={handleInput}
      cacheOptions
      defaultOptions
      placeholder="..."
      value={selectedLocation}
      getOptionLabel={(event) => event.subtitle}
      getOptionValue={(event) => event.id}
      loadOptions={getAgencyList}
      onChange={handleSelect}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      isDisabled={page === "offerConfig" && true}
    />
  );
};
export default AutoComplete;
