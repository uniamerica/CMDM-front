import React, { useState, useContext } from "react";

import Header from "../components/Header/Header";
import Titulo from "../components/Relatos/Titulo";
import { Link } from "react-router-dom";
import "../styles/Login.css";

import { Context } from  '../Context/AuthContext'
import Home from "./Home";

export default function Login() {
  
  const { authenticated, handleLogin } = useContext(Context)

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    const login = {
      username: username,
      password: password,
    };
    e.preventDefault()
    handleLogin(login);
  }

  const handleChangeEmail = (e) => {
    setUsername(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  console.debug("Login", authenticated)

  return (
    <div className="login">
      <Header />
      <center>
        <Titulo titulo="Login" />
      </center>
      <div className="login2">
        <form method="post" onSubmit={handleSubmit}>
          <input
            id="username"
            class="inputLogin"
            onChange={handleChangeEmail}
            name="username"
            type="text"
            placeholder="Jãozinho123"
            required
          />
          <input
            id="password"
            class="inputLogin"
            onChange={handleChangePassword}
            type="password"
            name="password"
            placeholder="*********"
            required
          />
          <br />
          <span className={"psw"}><Link  to={Home}>Esqueci minha senha</Link></span>
          <button type="submit" >Login</button>
        </form>
      </div>
    </div>
  );
}
