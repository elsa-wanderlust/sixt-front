// import from react and package(s)
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
// import styles
import "./header.css";
// import logo
import logo from "../../assets/img/sixt-logo.png";
// import component(s)
import HeaderLinks from "../HeaderLinks";
import BasicLink from "../BasicLink";
import NavigationTrack from "../NavigationTrack";

const Header = ({ page, setPage }) => {
  const navigate = useNavigate();
  const disconnect = () => {
    Cookies.remove("password");
    navigate("/");
  };

  return (
    <>
      <div className="headerContainer">
        <img src={logo} alt="sixt logo noir sur fond blanc" className="logo" />
        {(page === "home" || page === "backOffice") && (
          <HeaderLinks page={page} setPage={setPage} />
        )}
        {page !== "home" && page !== "backOffice" && (
          <NavigationTrack page={page} setPage={setPage} />
        )}
        <BasicLink
          title="BACKOFFICE"
          style="linksNotSelected"
          navigate="/backoffice"
        />
        {Cookies.get("password") && (
          <button onClick={disconnect}>se déconnecter</button>
        )}
      </div>
    </>
  );
};

export default Header;
