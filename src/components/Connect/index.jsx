// import from react and package(s)
import { useState } from "react";
import Cookies from "js-cookie";
// import components
import InputComponent from "../InputComponent";
import SelectButton from "../SelectButton";
// import style
import "./connect.scss";

// COMPONENT USAGE
// handle connection on backOffice page
const Connect = ({ setisConnected }) => {
  const [password, setPassword] = useState(
    Cookies.get("password") ? Cookies.get("password") : ""
  );
  const [errorMessage, setErrorMessage] = useState("");
  const handleConnect = () => {
    setErrorMessage("");
    if (password === "HelloWorld!") {
      Cookies.set("password", password);
      setisConnected(true);
    } else {
      setErrorMessage("Le mot de passe est incorrect");
    }
  };
  return (
    <div className="connection">
      <p>CONNECTION AU BACKOFFICE</p>
      <InputComponent
        type="password"
        placeholder={!Cookies.get("password") ? "mot de passe" : ""}
        state={password}
        setState={setPassword}
        connect={true}
      />
      <SelectButton
        func={handleConnect}
        title="SE CONNECTER"
        type="orangeLong"
        disabled={!password ? true : false}
      />
      {errorMessage && <p className="errorMessage">{errorMessage}</p>}
    </div>
  );
};

export default Connect;
