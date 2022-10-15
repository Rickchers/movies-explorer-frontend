import "./Login.css";
import logo from "../../images/header__logo.svg";

import { Link } from "react-router-dom";

function Login() {
  return (
    <section className="login__wrapper">
      <img
        className="login__logo"
        src={logo}
        alt="logo"
      />
      <h3 className="login__title">Рады видеть!</h3>
      
      <form className="login__form">
        
        <span className="login__input-title">E-mail</span>
        <input
          className="login__input"
          required
          type="text"
          name="link"
        />

        <span className="login__input-title">Пароль</span>
        <input
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