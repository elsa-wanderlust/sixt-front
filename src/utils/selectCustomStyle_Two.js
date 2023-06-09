// styling function used for the category filter (offerList page)

const customStyleTwo = () => {
  // function for styling
  const customStyles = {
    // the entry field
    control: (base) => ({
      ...base,
      fontFamily: "RC",
      color: "black",
      background: "#ff5f00",
      borderColor: "#ff5f00",
      boxShadow: null,
      "&:hover": {
        borderColor: null,
      },
    }),
    menu: (base) => ({
      ...base,
      fontFamily: "RC",
      marginTop: 0,
      paddingTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      fontFamily: "RC",
      background: "white",
      marginTop: 0,
      "&:hover": {
        background: "white",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "black",
      fontSize: 20,
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: "black",
      "&:hover": {
        color: "white",
      },
    }),
    // the general clear button
    clearIndicator: (base) => ({
      ...base,
      color: "black",
      "&:hover": {
        color: "white",
      },
    }),
    // what's selected
    multiValue: (base) => ({
      ...base,
      color: "black",
      background: "#ff5f00",
    }),
    // the options in the menu
    option: (provided) => ({
      ...provided,
      background: "white",
      color: "black",
      "&:hover": {
        background: "#ff5f00",
        color: "white",
      },
    }),
  };
  return customStyles;
};

export default customStyleTwo;
