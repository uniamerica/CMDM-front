import React, { useState, useContext } from "react";

import Header from "../components/Header/Header";
import Titulo from "../components/Relatos/Titulo";
import { Link } from "react-router-dom";
import "../styles/Login.css";

import { Context } from  '../Context/AuthContext'

export default function Login() {
  
  const { authenticated, handleLogin } = useContext(Context)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    const login = {
      username: email,
      password: password,
    };

    e.preventDefault()

  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
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
          {/* <input
            id="username"
            onChange={handleChangeEmail}
            name="usuario"
            type="text"
            placeholder="email@email.com"
            required
          />
          <input
            id="password"
            onChange={handleChangePassword}
            type="password"
            name="senha"
            placeholder="*********"
            required
          />
          <br />
          <span className={"psw"}><Link  to={Login}>Esqueci minha senha</Link></span> */}
          <button type="button" onClick={handleLogin}>Login</button>
        </form>
      </div>
    </div>
  );
}
