// import from react and package(s)
import React from "react";
import Select from "react-select";
// import style
import "../../styles/general.scss";

const TimeSelect = ({ state, setState, page }) => {
  const handleSelect = (time) => {
    setState(time);
  };

  const timeOptions = [
    { value: "T08:00:00", label: "8:00" },
    { value: "T08:30:00", label: "8:30" },
    { value: "T09:00:00", label: "9:00" },
    { value: "T09:30:00", label: "9:30" },
    { value: "T10:00:00", label: "10:00" },
    { value: "T10:30:00", label: "10:30" },
    { value: "T11:00:00", label: "11:00" },
    { value: "T11:30:00", label: "11:30" },
    { value: "T12:00:00", label: "12:00" },
    { value: "T12:30:00", label: "12:30" },
    { value: "T13:00:00", label: "13:00" },
    { value: "T13:30:00", label: "13:30" },
    { value: "T14:00:00", label: "14:00" },
    { value: "T14:30:00", label: "14:30" },
    { value: "T15:00:00", label: "15:00" },
    { value: "T15:30:00", label: "15:30" },
    { value: "T16:00:00", label: "16:00" },
    { value: "T16:30:00", label: "16:30" },
    { value: "T17:00:00", label: "17:00" },
    { value: "T17:30:00", label: "17:30" },
    { value: "T18:00:00", label: "18:00" },
  ];

  // function for styling
  const customStyles = {
    control: (base, state) => ({
      ...base,
      fontFamily: "RC",
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
      borderRadius: 0,
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      fontFamily: "RC",
      padding: 0,
    }),
    input: (base) => ({
      ...base,
      color: "white",
    }),
    singleValue: (base) => ({
      ...base,
      color: "white",
    }),
    placeholder: (base) => ({
      ...base,
      color: "white",
    }),
  };
  return (
    <Select
      value={state && state}
      styles={customStyles}
      options={timeOptions}
      onChange={handleSelect}
      components={{
        DropdownIndicator: () => null,
        IndicatorSeparator: () => null,
      }}
      isDisabled={page === "offerConfig" && true}
    />
  );
};

export default TimeSelect;
