import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Coding from "../assests/hello.svg";
import AuthContext from "../store/auth-context";

export default function LoginPage() {
  const navigate = useNavigate();

  //stateManagement
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const email_input_ref = useRef();
  const password_input_ref = useRef();
  const authCtx = useContext(AuthContext);
  const [errorMsg, setErrorMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const entered_email = email_input_ref.current.value;
    const entered_password = password_input_ref.current.value;
    const API_KEY = "AIzaSyBEpih2ypQ6k9jzSwobGtSWMN-TzgVTwjM";
    let url;
    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    } else {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    }
    axios
      .post(url, {
        email: entered_email,
        password: entered_password,
        returnSecureToken: true
      })
      .then((res) => {
        // console.log(res.data);
        authCtx.login(res.data.idToken);
        navigate("/home");
      })
      .catch((err) => {
        // console.log(err.response.data.error.message);
        // alert(err.response.data.error.message);
        setErrorMsg(err.response.data.error.message);
        setTimeout(() => {
          setErrorMsg("");
        }, 3000);
      });
  };

  return (
    <div className="app">
      <div className="container login_home">
        <div className="row">
          <form action="" onSubmit={submitHandler} className="col-6 login_form">
            <div className="login_heading">Login to your account</div>
            <input
              type="text"
              placeholder="Login with email or phone"
              className="login_inputs"
              ref={email_input_ref}
            />
            <br />
            <input
              type={`${showPassword ? "text" : "password"}`}
              placeholder="Password"
              className="login_inputs"
              ref={password_input_ref}
            />
            <br />
            {errorMsg && <p className="text-danger">{errorMsg}</p>}
            <div className="login_password">
              <input
                type="checkbox"
                name=""
                onChange={() => {
                  setShowPassword(!showPassword);
                }}
                id="show_password"
              />
              <label htmlFor="show_password" name="show_password">
                Password
              </label>
            </div>

            <button className="login_btn login_inputs" type="submit">
              {isLogin ? "LOGIN ACCOUNT" : "CREACT ACCOUNT"}
            </button>
            <div onClick={() => setIsLogin(!isLogin)}>
              {!isLogin ? "LOGIN ACCOUNT" : "CREACT ACCOUNT"}
            </div>

            <p className="login_forgot">Forgot password?</p>
          </form>

          <img className="col-6 login_img" src={Coding} alt="" />
        </div>
      </div>
      {/* <a className="text-white text-decoration-none" href="https://sandeep-badeti.netlify.app/" target="_blank" rel='noopener noreferrer'>
      <button className="btn myPortfolio" >
        My Portfolio
      </button>
        </a> */}
    </div>
  );
}
