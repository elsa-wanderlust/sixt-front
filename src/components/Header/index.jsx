// import from react and package(s)
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
// import styles
import "./header.scss";
// import logo
import logo from "../../assets/img/sixt-logo.png";
// import component(s)
import HeaderLinks from "../HeaderLinks";
import BasicLink from "../BasicLink";
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
  return (
    <>
      <div className="headerContainer">
        <div className="headerLeftSection">
          <img
            src={logo}
            alt="sixt logo noir sur fond blanc"
            className="logo"
            onClick={navHome}
          />
          {(page === "home" || page === "backOffice") && (
            <HeaderLinks page={page} setPage={setPage} />
          )}
          {page !== "home" && page !== "backOffice" && (
            <NavigationTrack page={page} />
          )}
        </div>
        <div className="headerRightSection">
          {page !== "backOffice" && (
            <BasicLink
              title="BACKOFFICE"
              style="med_Lk_Bl_notSelec"
              navigate="/backoffice"
              icon="world"
            />
          )}
          {page === "backOffice" && Cookies.get("password") && (
            <SelectButton
              func={disconnect}
              title="Se déconnecter"
              type="medium bl_border"
            />
          )}
          {page === "backOffice" && !Cookies.get("password") && (
            <BasicLink
              title="BACKOFFICE"
              style="med_Lk_Bl_notSelec"
              navigate="/backoffice"
              icon="world"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
