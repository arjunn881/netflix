import React from "react";
import "./Login.scss";
import Logo from "../../Asset/Logo.png";

export const Login = () => {


  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img className="logo" src={Logo} alt="" />
          
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input type="email" placeholder="Email or Phone number" />
          <input type="password" placeholder="Password" />
          <button className="loginButton">Sign In</button>
          <span>No to Netflix? <b>Sign up now</b></span>

          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};
