// import component(s)
import BasicLink from "../BasicLink";

// COMPONENT USAGE
// contains links on display in header when on home and backOffice pages only
const HeaderLinks = ({ page }) => {
  return (
    <div className="allLinks">
      <BasicLink
        title="RENT"
        style={page === "home" ? "big_Lk_Or_Selec " : "big_Lk_Bl_notSelec"}
      />
      <BasicLink title="SHARE" style="big_Lk_Bl_notSelec" />
      <BasicLink title="RIDE" style="big_Lk_Bl_notSelec" />
      <BasicLink
        title="SIXT+"
        subtitle="ABONNEMENT AUTO"
        style="big_Lk_Bl_notSelec"
      />
    </div>
  );
};
export default HeaderLinks;
