// import style
import "./footer.scss";

// import component(s)
import BasicLink from "../BasicLink/";

const Footer = () => {
  return (
    <div className="footerContainer">
      <section className="footerContainerSection">
        <BasicLink title="CONTACTS" style="sm_Lk_Wh_notSelec" />
        <BasicLink title="FAQ" style="sm_Lk_Wh_notSelec" />
        <BasicLink title="INFORMATIONS GÉNÉRALES" style="sm_Lk_Wh_notSelec" />
        <BasicLink title="AGENCES DE VOYAGES" style="sm_Lk_Wh_notSelec" />
      </section>
      <section className="footerContainerSection">
        <BasicLink title="SIXT ACTUALITÉS" style="sm_Lk_Wh_notSelec" />
        <BasicLink title="SIXT PARTENAIRES" style="sm_Lk_Wh_notSelec" />
        <BasicLink title="MENTIONS LÉGALES" style="sm_Lk_Wh_notSelec" />
        <BasicLink title="DONNÉES PERSONNELLES" style="sm_Lk_Wh_notSelec" />
        <BasicLink title="CGL" style="sm_Lk_Wh_notSelec" />
      </section>
    </div>
  );
};
export default Footer;
