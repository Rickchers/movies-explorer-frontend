import "./Login.css";
import logo from "../../images/header__logo.svg";

import React, { useState } from "react";

import { Link } from "react-router-dom";

function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(email, password);
  }

  return (
    <section className="login__wrapper">
      <a href="/">
        <img
          className="login__logo"
          src={logo}
          alt="logo"
        />
      </a>
      <h3 className="login__title">Рады видеть!</h3>
      
      <form
        className="login__form"
        onSubmit={handleSubmit}
      >
        
        <span className="login__input-title">E-mail</span>
        <input
          onChange={handleChangeEmail}
          className="login__input"
          required
          type="text"
          name="link"
        />

        <span className="login__input-title">Пароль</span>
        <input
          onChange={handleChangePassword}
          className="login__input"
          required
          type="password"
          minLength="2"
          maxLength="200"
        />

        <button type="submit" className="login__button">
          Войти
        </button>

        <Link to="/signup" className="login__register-link">
          Ещё не зарегистрированы? <span className="login__register-link login__register-link_colored">Регистрация</span>
        </Link>
        
      </form>

    </section>
  )
}

export default Login;