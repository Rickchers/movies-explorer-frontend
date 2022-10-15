import "./Register.css"
import logo from "../../images/header__logo.svg";

import { Link } from "react-router-dom";

function Register() {
  return (
    <section className="register__wrapper">
      <img
        className="register__logo"
        src={logo}
        alt="logo"
      />
      <h3 className="register__title">Добро пожаловать!</h3>
      
      <form className="register__form">
        
        <span className="register__input-title">Имя</span>
        <input
          className="register__input"
          required
          placeholder=""
          name="name"
          minLength="2"
          maxLength="30"
        />
      

      
        <span className="register__input-title">E-mail</span>
        <input
          className="register__input"
          required
          type="text"
          name="link"
        />

        <span className="register__input-title">Пароль</span>
        <input
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