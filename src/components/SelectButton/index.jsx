// import style
import "./selectButton.css";

const SelectButton = ({ func, title, type }) => {
  return (
    <button onClick={func} className={type}>
      {title}
    </button>
  );
};

export default SelectButton;
