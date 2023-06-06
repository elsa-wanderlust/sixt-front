// import from react and package(s)
import { useState } from "react";
// import style
import "./inputField.css";

const InputField = ({
  type,
  placeholder,
  state,
  setState,
  label,
  validity,
  name,
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
    if (validity === "email" && !isValidEmail(state)) {
      setError(true);
    } else if (validity[1] !== undefined) {
      if (state < validity[0] || state > validity[1]) {
        setError(true);
      }
    } else if (state.length < validity[0]) {
      setError(true);
    }
  };

  return (
    <div>
      {!label ? (
        <input
          className={error ? "errorInput" : "inputField"}
          type={type}
          placeholder={placeholder}
          onChange={handleChange}
          value={state}
          onBlur={handleOnBlur}
          onFocus={handleOnFocus}
        />
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
    </div>
  );
};
export default InputField;
