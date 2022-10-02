import "./Header.css";
import logo from "../../images/header__logo.svg";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="logo"
      />
      <p className="header__item-one">Регистрация</p>
      <button
        type="button"
        className="header__button">Войти
      </button>
    </header> 
  )
}

export default Header;