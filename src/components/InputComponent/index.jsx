// import from react and package(s)
import { useState } from "react";
// import style
import "./inputComponent.scss";

// COMPONENT USAGE
// manage input fields from personalDetails and backOffice connect pages
const InputComponent = ({
  type,
  placeholder,
  state,
  setState,
  label,
  validity,
  connect,
}) => {
  const [error, setError] = useState(false);
  // declare function to handle change
  const handleChange = (event) => {
    if (placeholder === "Adresse email *") {
      setState(event.target.value.toLowerCase());
    } else {
      setState(event.target.value);
    }
  };
  // declare function to check email
  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  // declare function to reset error on Focus
  const handleOnFocus = () => {
    setError(false);
  };
  // declare function to set error on Blur if conditions not met
  const handleOnBlur = () => {
    if (validity === "email") {
      if (!isValidEmail(state)) {
        setError(true);
      }
    } else if (validity[1]) {
      if (state < validity[0] || state > validity[1]) {
        setError(true);
      }
    } else if (state.length < validity[0]) {
      setError(true);
    } else {
      return;
    }
  };

  return (
    <>
      {!label ? (
        <div className={connect ? "connect" : "inputFields"}>
          <input
            className={error ? "errorInput" : "inputField"}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
            value={state}
            onBlur={validity && handleOnBlur}
            onFocus={validity && handleOnFocus}
          />
        </div>
      ) : (
        <>
          <label>
            <input
              type={type}
              value={label}
              checked={state === label}
              onChange={handleChange}
            />
            {label}
          </label>
        </>
      )}
    </>
  );
};
export default InputComponent;
