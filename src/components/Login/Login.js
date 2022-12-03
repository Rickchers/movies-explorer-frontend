import React, { useEffect } from "react";
import "./Login.css";
import logo from "../../images/header__logo.svg";
import { Link } from "react-router-dom";

//импортируем модуль валидации форм
import useInput from "../../hooks/useInput.js"

function Login(props) {
  useEffect(()=>{
    props.setLoginError(false);
  },[])

  const email = useInput("", {isEmpty: true, minLength: 3, isEmail: true,});
  const password = useInput("", {isEmpty: true, minLength: 2, maxLength: 200});
  

  function handleSubmit(e) {
    e.preventDefault();
    props.onLogin(email.value, password.value);
  }

  const myEmailDiv = email.result();
  const myPasswordDiv = password.result();

  return (
    <section className="login__wrapper">
      
      <Link to="/">
        <img
          className="login__logo"
          src={logo}
          alt="logo"
        />
      </Link>
      <h3 className="login__title">Рады видеть!</h3>
      
      <form
        onSubmit={handleSubmit}
        noValidate
        className="login__form"
      >
        
        <span className="login__input-title">E-mail</span>        
        <input
          onChange={e => email.onChange(e)}
          onBlur={e => email.onBlur(e)}
          value={email.value}
          placeholder= ""
          name="email"
          type="text"          
          className="login__input"
          required
        />
        
        {myEmailDiv}        

        <span className="login__input-title">Пароль</span>
        <input
          onChange={e => password.onChange(e)}
          onBlur={e => password.onBlur(e)}
          value={password.value}
          placeholder= ""
          name="password"
          type="password"          
          className="login__input"
          required
          minLength="2"
          maxLength="200"
        />
        
        {myPasswordDiv}

        <div className="login__error-wrapper">
          <p className={props.loginError ? "login__error-message" : "login__error-message_hidden"}>Введенные данные неверны</p>
        </div>
        
        <button
          disabled={!email.inputValid || !password.inputValid}
          type="submit"
          className={ !email.inputValid || !password.inputValid ? "login__button" : "login__button login__button_active"}
        >
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