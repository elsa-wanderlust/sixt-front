// import style
import "./selectButton.css";

const SelectButton = ({ func, title, type, disabled }) => {
  return (
    <button onClick={func} className={type} disabled={disabled}>
      {title}
    </button>
  );
};

export default SelectButton;
