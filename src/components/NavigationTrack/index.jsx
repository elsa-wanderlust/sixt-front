// import components
import BasicLink from "../BasicLink";
// import style
import "./navigationTrack.css";

const NavigationTrack = ({ page }) => {
  return (
    <>
      <p className="NavSelected">SELECTION DES VEHICULES</p>
      <p className={page !== "offerList" ? "NavSelected" : "NavNotSelected"}>
        PROTECTIONS ET OPTIONS
      </p>
      <p className={page === "personnal" ? "NavSelected" : "NavNotSelected"}>
        CONDUCTEUR
      </p>
    </>
  );
};

export default NavigationTrack;
