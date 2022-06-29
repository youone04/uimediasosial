import './register.css';

const Register = () => {
    return(
       <div className="login">
           <div className="loginWrapper">
               <div className="loginLeft">
                   <h3 className="loginLogo">CawaApps</h3>
                   <span className="loginDesc">Hubungkan anda dengan teman - teman anda</span>
               </div>
               <div className="loginRight">
                   <div className="loginBox">
                       <input type="email" placeholder="username" className="loginInput" />
                       <input type="email" placeholder="Email" className="loginInput" />
                       <input type="email" placeholder="Password" className="loginInput" />    
                       <input type="password" placeholder="Password Again" className="loginInput" />
                       <button className="loginButton">Sign Up</button>
                       <button className="loginRegisterButton">
                           Log into Account
                       </button>
                   </div>
               </div>
           </div>
       </div>
    )
}
export default Register;