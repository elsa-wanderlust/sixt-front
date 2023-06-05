// import from react and package(s)
import { Link } from "react-router-dom";
// import styles
import "./headerLinks.css";
// import component(s)
import BasicLink from "../BasicLink";

const HeaderLinks = ({ page }) => {
  return (
    <div className="allLinks">
      <BasicLink navigate="/" title="RENT" style="linksSelected" />
      <BasicLink title="SHARE" style="linksBlackBasic" />
      <BasicLink title="RIDE" style="linksBlackBasic" />
      <BasicLink
        title="SIXT+"
        subtitle="ABONNEMENT AUTO"
        style="linksBlackBasic SixtPlus"
      />
    </div>
  );
};
export default HeaderLinks;
