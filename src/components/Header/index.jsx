// import from react and package(s)
import { Link } from "react-router-dom";
// import styles
import "./header.css";
// import logo
import logo from "../../assets/img/sixt-logo.png";
// import component(s)
import SearchFieldSection from "../SearchFieldsSection";
import HeaderLinks from "../HeaderLinks";
import BasicLink from "../BasicLink";

const Header = ({ page }) => {
  return (
    <>
      <div className="headerContainer">
        <img src={logo} alt="sixt logo noir sur fond blanc" className="logo" />
        <HeaderLinks />
        <BasicLink
          title="BACKOFFICE"
          style="linksNotSelected"
          navigate="/backoffice"
        />
      </div>
    </>
  );
};

export default Header;
