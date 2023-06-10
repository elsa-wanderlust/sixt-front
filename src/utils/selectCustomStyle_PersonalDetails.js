// styling function used for the country and area code selection (personalDetails page)

const customStylePersonalDetails = () => {
  // function for styling
  const customStyles = {
    // the input field
    control: (base, state) => ({
      ...base,
      fontFamily: "Roboto",
      background: "white",
      borderColor: "white",
      borderBottomColor: "#b2b2b2",
      boxShadow: null,
      "&:hover": {
        borderColor: "white",
        borderBottomColor: "#b2b2b2",
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
  return customStyles;
};

export default customStylePersonalDetails;
