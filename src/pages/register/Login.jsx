import "./register.css";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        userName: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      console.log(user)
      try {
        await axios.post("/auth/register", user);
        navigate('/login')
      } catch (error) {
        console.log(error);
      }
    }
  };

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
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="text"
              placeholder="username"
              ref={username}
              className="loginInput"
              required
            />
            <input
              type="email"
              placeholder="Email"
              ref={email}
              className="loginInput"
              required
            />
            <input
              type="password"
              minLength={"6"}
              placeholder="Password"
              ref={password}
              className="loginInput"
              required
            />
            <input
              type="password"
              minLength={"6"}
              placeholder="Password Again"
              ref={passwordAgain}
              className="loginInput"
              required
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
