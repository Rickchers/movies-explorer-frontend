import "./Register.css"
import logo from "../../images/header__logo.svg";

import { Link } from "react-router-dom";
import { useState } from "react";

import useInput from "../../hooks/useInput.js"

function Register(props) {
  
  const userName = useInput("", {isEmpty: true, minLength: 2, isName: true});
  const email = useInput("", {isEmpty: true, minLength: 3, isEmail: true,});
  const password = useInput("", {isEmpty: true, minLength: 2});

  function handleSubmit(e) {
    e.preventDefault();
    props.onRegister(userName.value, email.value, password.value);
  }

  const myUserNameDiv = userName.result();
  const myEmailDiv = email.result();
  const myPasswordDiv = password.result();

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
      
      <form
        onSubmit={handleSubmit}
        noValidate
        className="register__form">
        
        <span className="register__input-title">Имя</span>
        <input
          onChange={e => userName.onChange(e)}
          onBlur={e => userName.onBlur(e)}
          value={userName.value}
          placeholder=""
          name="name"
          type="text"
          className="register__input"
          minLength="2"
          maxLength="30"
          required
        />
      
        {myUserNameDiv}
      
        <span className="register__input-title">E-mail</span>
        <input
          onChange={e => email.onChange(e)}
          onBlur={e => email.onBlur(e)}
          value={email.value}
          placeholder= ""
          name="email"
          type="text"
          className="register__input"
          required
        />

        {myEmailDiv}

        <span className="register__input-title">Пароль</span>
        <input
          onChange={e => password.onChange(e)}
          onBlur={e => password.onBlur(e)}
          value={password.value}
          placeholder= ""
          name="password"
          type="password"
          className="register__input"
          minLength="2"
          maxLength="200"
          required
        />

        {myPasswordDiv}

        {/* <span className="register__input-error">Что-то пошло не так...</span> */}

        <button
          disabled={!email.inputValid || !password.inputValid || !userName.inputValid}
          type="submit"
          
          className={ !email.inputValid || !password.inputValid || !userName.inputValid ? "register__button" : "register__button register__button_active"}
        >
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