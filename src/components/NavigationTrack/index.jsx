// import components
import BasicLink from "../BasicLink";
// import style
import "./navigationTrack.scss";

// COMPONENT USAGE
// display navigation steps in header when on offerList, offerConfig and personalDetails pages only
const NavigationTrack = ({ page }) => {
  return (
    <>
      <div className="allLinks">
        <BasicLink
          title="SÉLÉCTION DES VÉHICULES"
          style={"big_Lk_Or_notSelec"}
          number="1"
        />
        <BasicLink
          title="PROTECTIONS ET OPTIONS"
          style={
            page !== "offerList" ? "big_Lk_Or_notSelec" : "big_Lk_Lg_notSelec"
          }
          number="2"
        />
        <BasicLink
          title="CONDUCTEUR"
          style={
            page === "personnalDetails"
              ? "big_Lk_Or_notSelec"
              : "big_Lk_Lg_notSelec"
          }
          number="3"
        />
      </div>
    </>
  );
};

export default NavigationTrack;
