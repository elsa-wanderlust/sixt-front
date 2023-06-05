// import style
import "./footer.css";
// import component(s)
import BasicLink from "../BasicLink/";

const Footer = () => {
  return (
    <div className="footerContainer">
      <BasicLink title="CONTACTS" style="linksWhiteBasic" />
      <BasicLink title="FAQ" style="linksWhiteBasic" />
      <BasicLink title="INFORMATIONS GENERALES" style="linksWhiteBasic" />
      <BasicLink title="AGENCES DE VOYAGES" style="linksWhiteBasic" />
      <BasicLink title="SIXT ACTUALITES" style="linksWhiteBasic" />
      <BasicLink title="SIXT PARTENAIRES" style="linksWhiteBasic" />
      <BasicLink title="MENTIONS LEGALES" style="linksWhiteBasic" />
      <BasicLink title="DONNEES PERSONNELLES" style="linksWhiteBasic" />
      <BasicLink title="CGL" style="linksWhiteBasic" />
    </div>
  );
};
export default Footer;
