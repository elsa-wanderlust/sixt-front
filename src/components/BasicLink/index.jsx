// import from react and package(s)
import { Link } from "react-router-dom";
// import styles
import "./basicLink.scss";

const BasicLink = ({
  navigate,
  title,
  subtitle,
  style,
  state,
  icon,
  number,
}) => {
  return (
    <Link to={navigate && navigate} state={state} className={style}>
      {icon === "world" && <p className="iconMedium"> </p>}
      {number && <p className={`${style}Num`}>{number}</p>}
      {title}
      {subtitle && <p className="med_Lk_Bl_notSelec">{subtitle}</p>}
    </Link>
  );
};
export default BasicLink;
