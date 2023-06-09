// styling function used for the agency and the time selections

const customStyleOne = () => {
  // function for styling
  const customStyles = {
    // the entry field
    control: (base) => ({
      ...base,
      fontFamily: "RC",
      color: "white",
      background: "black",
      borderColor: "black",
      boxShadow: null,
      "&:hover": {
        borderColor: null,
      },
    }),
    menu: (base) => ({
      ...base,
      fontFamily: "RC",
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      fontFamily: "RC",
      background: "white",
      "&:hover": {
        background: "white",
      },
    }),
    placeholder: (base) => ({
      ...base,
      color: "white",
    }),
    // what we type
    input: (base) => ({
      ...base,
      color: "white",
    }),
    // what's selected
    singleValue: (base) => ({
      ...base,
      color: "white",
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

export default customStyleOne;
