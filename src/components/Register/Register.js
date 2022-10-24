import "./Register.css"
import logo from "../../images/header__logo.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

function Register(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(name, email, password);
  }

  return (
    <section className="register__wrapper">
      <a href="/">
        <img
          className="register__logo"
          src={logo}
          alt="logo"
        />
      </a>
      <h3 className="register__title">Добро пожаловать!</h3>
      
      <form onSubmit={handleSubmit} className="register__form">
        
        <span className="register__input-title">Имя</span>
        <input
          onChange={handleChangeName}
          className="register__input"
          required
          placeholder=""
          name="name"
          minLength="2"
          maxLength="30"
        />
      

      
        <span className="register__input-title">E-mail</span>
        <input
          onChange={handleChangeEmail}
          className="register__input"
          required
          type="text"
          name="email"
        />

        <span className="register__input-title">Пароль</span>
        <input
          onChange={handleChangePassword}
          className="register__input"
          required
          type="password"
          minLength="2"
          maxLength="200"
        />
        <span className="register__input-error">Что-то пошло не так...</span>

        <button type="submit" className="register__button">
          Зарегистрироваться
        </button>

        <Link to="/signin" className="register__login-link">
          Уже зарегистрированы? <span className="register__login-link register__login-link_colored">Войти</span>
        </Link>
        
      </form>

    </section>
  )
}

export default Register;