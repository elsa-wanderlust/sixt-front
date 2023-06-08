// import style
import "./mediaConnect.scss";
// import component
import SelectButton from "../SelectButton";

const MediaConnect = () => {
  return (
    <div className="mediaConnectContainer">
      <div className="appDownload">
        <p>TÉLÉCHARGER L'APP SIXT</p>
        <div className="appButtons">
          <SelectButton icon="appStore" type="orange bl_border medium" />
          <SelectButton icon="googleStore" type="orange bl_border medium" />
        </div>
      </div>
      <div className="socialMedia">
        <p>SUIVEZ-NOUS</p>
        <div className="socialMediaIcons">
          <p className="icon iconMedium"></p>
          <p className="icon iconMedium"></p>
          <p className="icon iconMedium"></p>
          <p className="icon iconMedium"></p>
        </div>
      </div>
    </div>
  );
};

export default MediaConnect;