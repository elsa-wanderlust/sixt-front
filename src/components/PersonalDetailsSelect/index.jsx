// import from react and package(s)
import React from "react";
import Select from "react-select";
// import style
import "./personalDetailsSelect.scss";
import customStylePersonalDetails from "../../utils/selectCustomStyle_PersonalDetails";
// import function
customStylePersonalDetails;

// COMPONENT USAGE
// handles dropdown menus for country and country code on personalDetails page
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

  const style = customStylePersonalDetails();

  return (
    <div className="personalDetailsSelect">
      {type === "country" ? (
        <Select
          styles={style}
          value={state && state}
          options={country}
          onChange={handleSelect}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      ) : (
        <Select
          styles={style}
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
