// import from react and package(s)
import { useState } from "react";
import Cookies from "js-cookie";
// import components
import InputField from "../../components/InputField";
import SelectButton from "../SelectButton";
// import style
import "./connect.scss";

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
      <InputField
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
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Connect;
