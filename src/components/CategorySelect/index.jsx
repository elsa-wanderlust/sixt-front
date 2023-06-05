// import from react and package(s)
import React from "react";
import Select from "react-select";

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
  return <Select options={vehiculeOptions} onChange={handleSelect} isMulti />;
};

export default CategorySelect;
