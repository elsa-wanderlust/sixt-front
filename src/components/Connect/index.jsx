// import from react and package(s)
import { useState } from "react";
import Cookies from "js-cookie";
// import components
import InputField from "../../components/InputField";

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
    <div>
      <p>CONNECTION AU BACKOFFICE</p>
      <InputField
        type="password"
        placeholder={!Cookies.get("password") && "mot de passe"}
        state={password}
        setState={setPassword}
      />
      <button onClick={handleConnect}>SE CONNECTER</button>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Connect;
