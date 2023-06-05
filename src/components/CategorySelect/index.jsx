// import from react and package(s)
import React from "react";
import Select from "react-select";
import { components } from "react-select";

const CategorySelect = ({ setCategory }) => {
  const handleSelect = (selection) => {
    const categoryCopy = [];
    for (let i = 0; i < selection.length; i++) {
      categoryCopy.push(selection[i].value);
    }
    setCategory(categoryCopy);
  };

  const vehiculeOptions = [
    { value: "Cabriolet", label: "CABRIOLET" },
    { value: "Coupé", label: "COUPÉ" },
    { value: "Berline", label: "BERLINE" },
    { value: "SUV", label: "SUV" },
    { value: "Pick-up", label: "PICK-UP" },
  ];

  const Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

  return (
    <Select
      options={vehiculeOptions}
      onChange={handleSelect}
      isMulti
      components={{ Option }}
    />
  );
};

export default CategorySelect;
