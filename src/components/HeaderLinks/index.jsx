// import component(s)
import BasicLink from "../BasicLink";

const HeaderLinks = ({ page }) => {
  return (
    <div className="allLinks">
      <BasicLink
        navigate="/"
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
