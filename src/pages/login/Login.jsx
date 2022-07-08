import { useContext } from "react";
import { useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import CircularProgress from '@material-ui/core/CircularProgress';
import "./login.css";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const {user , isFetching , error , dispatch} = useContext(AuthContext);

    const handlerSubmit = (e) => {
        e.preventDefault();
        loginCall({email : email.current.value , password : password.current.value} , dispatch)
        
    }
    console.log(user)
    

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
                minLength="3"
                ref={password}
                required
              />
              <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress color="white" size={15}/>: "Log In"}</button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">
              {isFetching ? <CircularProgress color="white" size={15}/>: "Cretae a New Account"}
              
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
