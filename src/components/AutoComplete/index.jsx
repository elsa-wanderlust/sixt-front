// import from react and package(s)
import React from "react";
import { useState } from "react";
import axios from "axios";
import AsyncSelect from "react-select/async";

const AutoComplete = ({ selectedLocation, setSelectedLocation }) => {
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
          `http://localhost:3000/agency/list?${query}`
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <AsyncSelect
      onInputChange={handleInput}
      cacheOptions
      defaultOptions
      value={selectedLocation}
      getOptionLabel={(event) => event.subtitle}
      getOptionValue={(event) => event.id}
      loadOptions={getAgencyList}
      onChange={handleSelect}
    />
  );
};
export default AutoComplete;
