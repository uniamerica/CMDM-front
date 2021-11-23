import React, { useState, useContext } from "react";

import Header from "../components/Header/Header";
import Titulo from "../components/Relatos/Titulo";
import { Link } from "react-router-dom";
import styles from '../styles/Login.module.css'

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

  return (
    <div className={styles.login}>
      <Header />
      <center>
        <Titulo titulo="Login" />
      </center>
      <div className={styles.login2}>
        <form method="post" onSubmit={handleSubmit}>
          <input
            id="username"
            className={styles.inputLogin}
            onChange={handleChangeEmail}
            name="username"
            type="text"
            data-testid="usernameInput"
            placeholder="usuario"
            required
          />
          <input
            id="password"
            className={styles.inputLogin}
            onChange={handleChangePassword}
            type="password"
            name="password"
            data-testid="passwordInput"
            placeholder="senha"
            required
          />
          <br />
          <span className={styles.psw}><Link  to={Home}>Esqueci minha senha</Link></span>
          <button type="submit" data-testid='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}
