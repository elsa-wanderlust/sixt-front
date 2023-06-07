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

  // function for styling
  const customStyles = {
    control: (base, state) => ({
      ...base,
      fontFamily: "RC",
      color: "white",
      background: "black",
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      borderColor: state.isFocused ? "black" : "black",
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        borderColor: state.isFocused ? "black" : "black",
      },
    }),
    menu: (base) => ({
      ...base,
      fontFamily: "RC",
      color: "black",
      borderRadius: 0,
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      fontFamily: "RC",
      padding: 0,
    }),
    placeholder: (base) => ({
      ...base,
      color: "white",
    }),
  };

  return (
    <AsyncSelect
      styles={customStyles}
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
    />
  );
};
export default AutoComplete;
