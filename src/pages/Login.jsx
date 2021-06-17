import React, { useState } from "react";

import Header from "../components/Header/Header";
import Titulo from "../components/Relatos/Titulo";
import { Link, useHistory } from "react-router-dom";
import "../styles/Login.css";

import api from '../api/api'

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  function handleSubmit(e) {
    const login = {
      username: email,
      password: password,
    };

    e.preventDefault()

    api.post("/login", login).then((response) => {
        history.push('/')
    })

    console.log(login);
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

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
          <span className={"psw"}><Link  to={Login}>Esqueci minha senha</Link></span>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
