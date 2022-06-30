import { useRef } from "react";
import "./login.css";

const Login = () => {
  const email = useRef();
  const password = useRef();

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(email.current.value)
    }

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">CawaApps</h3>
          <span className="loginDesc">
            Hubungkan anda dengan teman - teman anda
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handlerSubmit}>
            <div className="loginBox">
              <input type="email" placeholder="Email" className="loginInput" ref={email} required/>
              <input
                type="password"
                placeholder="Password"
                className="loginInput"
                minLength="6"
                ref={password}
                required
              />
              <button className="loginButton">Log In</button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">
                Cretae a New Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
