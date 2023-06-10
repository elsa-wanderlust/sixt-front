// import style
import "./selectButton.scss";

const SelectButton = ({ func, title, type, disabled, icon }) => {
  const iconList = [{ appStore: "", googleStore: "", world: "" }];

  return (
    <button onClick={func} className={type} disabled={disabled}>
      <>
        {icon && <p className="iconMedium">{iconList[icon]}</p>}
        {title}
      </>
    </button>
  );
};

export default SelectButton;
