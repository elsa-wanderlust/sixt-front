// import from react and package(s)
import React from "react";
import Select from "react-select";
import { components } from "react-select";

const PersonalDetailsSelect = ({ type, state, setState }) => {
  const handleSelect = (selection) => {
    setState(selection);
  };

  const country = [
    { value: "France", label: "France" },
    { value: "Other", label: "Le reste du monde" },
  ];
  const countryCode = [
    { value: "France", label: "+33" },
    { value: "Other", label: "+.." },
  ];

  return (
    <div>
      {type === "country" ? (
        <Select
          value={state && state}
          options={country}
          onChange={handleSelect}
          components={{
            IndicatorSeparator: () => null,
          }}
        />
      ) : (
        <Select
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
