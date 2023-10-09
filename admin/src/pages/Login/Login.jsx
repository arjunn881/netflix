import React, { useContext, useState } from "react";
import "./Login.css";
import { AuthContext } from "../../context/authContext/AuthContext";
import { login } from "../../context/authContext/apiCall";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {isFatching, dispatch} = useContext(AuthContext);

  
    const  handleLogin=(e)=>{
        e.preventDefault();

        login({email,password},dispatch);



    }
  return (
    <div className="login">
      <form className="loginForm">
        <input
          type="text"
          placeholder="email"
          className="loginInput"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="loginInput"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="loginButton" onClick={handleLogin} disabled={isFatching}>Login</button>
      </form>
    </div>
  );
};
