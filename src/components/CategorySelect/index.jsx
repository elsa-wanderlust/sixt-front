// import from react and package(s)
import React from "react";
import Select from "react-select";
// import { components } from "react-select";
// import from style
import "./categorySelect.scss";
// import function
import customStyleCategory from "../../utils/selectCustomStyle_Category";

const CategorySelect = ({ setCategory }) => {
  const handleSelect = (selection) => {
    const categoryCopy = [];
    for (let i = 0; i < selection.length; i++) {
      categoryCopy.push(selection[i].value);
    }
    setCategory(categoryCopy);
  };

  const vehiculeOptions = [
    { value: "Cabriolet", label: "CABRIOLET", icon: "" },
    { value: "Coupé", label: "COUPÉ", icon: "" },
    { value: "Berline", label: "BERLINE", icon: "" },
    { value: "SUV", label: "SUV", icon: "" },
    { value: "Pick-up", label: "PICK-UP", icon: "" },
  ];

  const style = customStyleCategory();

  return (
    <div className="categorySelect">
      <Select
        options={vehiculeOptions}
        placeholder="Catégories de véhicules"
        onChange={handleSelect}
        isMulti
        styles={style}
        // components={{ Option }}
        ClearIndicator="supp"
        components={{
          IndicatorSeparator: () => null,
        }}
        getOptionLabel={(e) => (
          <div className="categoryOptions">
            {e.label}
            <span className="iconMedium">{e.icon}</span>
          </div>
        )}
      />
    </div>
  );
};

export default CategorySelect;
