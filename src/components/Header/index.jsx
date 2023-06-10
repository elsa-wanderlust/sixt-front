// import from react and package(s)
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
// import styles
import "./header.scss";
// import logo
import logo from "../../assets/img/sixt-logo.png";
// import component(s)
import HeaderLinks from "../HeaderLinks";
import NavigationTrack from "../NavigationTrack";
import SelectButton from "../SelectButton";

const Header = ({ page, setPage }) => {
  const navigate = useNavigate();
  const disconnect = () => {
    Cookies.remove("password");
    setPage("home");
    navigate("/");
  };
  const navHome = () => {
    setPage("home");
    navigate("/");
  };
  const navBackOffice = () => {
    setPage("backOffice");
    navigate("/backoffice");
  };
  return (
    <>
      <div className="headerContainer">
        <div className="headerLeftSection">
          <div className="logoContainer">
            <img
              src={logo}
              alt="sixt logo noir sur fond blanc"
              className="logo"
              onClick={navHome}
            />
          </div>
          {(page === "home" || page === "backOffice") && (
            <HeaderLinks page={page} setPage={setPage} />
          )}
          {page !== "home" && page !== "backOffice" && (
            <NavigationTrack page={page} />
          )}
        </div>
        <div className="headerRightSection">
          {page !== "backOffice" && (
            <SelectButton
              func={navBackOffice}
              title="BACKOFFICE"
              type="whiteLong"
              icon="world"
            />
          )}
          {page === "backOffice" && Cookies.get("password") && (
            <SelectButton
              func={disconnect}
              title="Se déconnecter"
              type="whiteLongBorder"
            />
          )}
          {page === "backOffice" && !Cookies.get("password") && (
            <SelectButton
              func={navBackOffice}
              title="BACKOFFICE"
              type="whiteLong"
              icon="world"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
