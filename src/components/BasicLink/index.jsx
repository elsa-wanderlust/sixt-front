// import from react and package(s)
import { Link } from "react-router-dom";
// import styles
import "./basicLink.css";

const BasicLink = ({ navigate, title, subtitle, style, state }) => {
  return (
    <Link to={navigate ? navigate : ""} state={state} className={style}>
      {title}
      {subtitle && <p>{subtitle}</p>}
    </Link>
  );
};
export default BasicLink;
