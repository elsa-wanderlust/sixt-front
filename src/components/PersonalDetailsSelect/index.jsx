// import from react and package(s)
import React from "react";
import Select from "react-select";
// import style
import "./personalDetailsSelect.scss";

const PersonalDetailsSelect = ({ type, state, setState }) => {
  const handleSelect = (selection) => {
    setState(selection);
  };
  // drop down menu options
  const country = [
    { value: "France", label: "France" },
    { value: "Other", label: "Le reste du monde" },
  ];
  const countryCode = [
    { value: "France", label: "+33" },
    { value: "Other", label: "+.." },
  ];

  // function for styling
  const customStyles = {
    control: (base, state) => ({
      ...base,
      fontFamily: "Roboto",
      background: "white",
      borderRadius: state.isFocused ? "3px 3px 0 0" : 3,
      borderColor: state.isFocused ? "white" : "white",
      borderBottomColor: state.isFocused ? "#b2b2b2" : "#b2b2b2",
      boxShadow: state.isFocused ? null : null,
      "&:hover": {
        borderColor: state.isFocused ? "white" : "white",
        borderBottomColor: state.isFocused ? "#b2b2b2" : "#b2b2b2",
      },
    }),
    menu: (base) => ({
      ...base,
      fontFamily: "Roboto",
      borderRadius: 0,
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      fontFamily: "Roboto",
      padding: 0,
    }),
    input: (base) => ({
      ...base,
      color: "white",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#b2b2b2",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#b2b2b2",
      marginLeft: 0,
    }),
    dropdownIndicator: (style) => ({
      ...style,
      paddingTop: 7,
      paddingBottom: 7,
    }),
  };

  return (
    <div className="personalDetailsSelect">
      {type === "country" ? (
        <Select
          styles={customStyles}
          value={state && state}
          options={country}
          onChange={handleSelect}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      ) : (
        <Select
          styles={customStyles}
          value={state && state}
          options={countryCode}
          onChange={handleSelect}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      )}
    </div>
  );
};

export default PersonalDetailsSelect;
