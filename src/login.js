import { useHistory } from "react-router-dom";
import getData from "./httpService";
const loginDetailCont = {
  height: "30px",
  marginBottom: "30px"
};
const loginContainer = {
  display: "flex",
  flexFlow: "column",
  justifyContent: "center",
  alignItems: "center",

  height: "inherit"
};
const Login = () => {
  const history = useHistory();

  const handleLoginBtn = () => {
    history.push("/dashboard");
    getData(
      "https://a8bdff49-b6d8-4b83-b50f-27281a70e088.mock.pstmn.io/breeds"
    );
  };

  return (
    <>
      <div style={loginContainer}>
        <div style={loginDetailCont}>
          <label>
            UserName:
            <input type="text" />
          </label>
        </div>
        <div style={loginDetailCont}>
          <label>
            Passoword:
            <input type="text" />
          </label>
        </div>
        <button
          style={{ alignSelf: "flex-start", marginLeft: "10%" }}
          onClick={handleLoginBtn}
          className="loginBtn"
        >
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
