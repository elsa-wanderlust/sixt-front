// import style
import "./selectButton.scss";

const SelectButton = ({ func, title, type, disabled, icon }) => {
  return (
    <button onClick={func} className={type} disabled={disabled}>
      <>
        {icon === "appStore" && <p className="iconMedium"></p>}
        {icon === "googleStore" && <p className="iconMedium"></p>}
        {icon === "world" && <p className="iconMedium"></p>}
        {title}
      </>
    </button>
  );
};

export default SelectButton;
