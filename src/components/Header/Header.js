import "./Header.css";
import logo from "../../images/header__logo.svg";

import Navigation from "../../components/Navigation/Navigation";

import { useState } from "react";

function Header({ isLoggedIn }) {
  const [isSidebarOpened, setSidebarOpened] = useState(false);
  
  function handleOpenSideBar() {      
    setSidebarOpened(true);
  }

  function handleCloseSideBar() {
    setSidebarOpened(false);
  }

  return (
    <header className="header">
      
      <a href="/">
        <img
          className="header__logo"
          src={logo}
          alt="logo"
        />
      </a>

      {isLoggedIn && <Navigation 
        isOpened={isSidebarOpened}
        onClickPie={handleOpenSideBar} 
        onClickCross={handleCloseSideBar}     
      />}
      
      
      <a
        href="/signup"
        className={`${isLoggedIn ? "header__item-one_hidden" : "header__item-one"}`}>
        Регистрация
      </a>
      
      <a
        href="/signin"
        className={`${isLoggedIn ? "header__button-signin_hidden" : "header__button-signin"}`}>
        Войти
      </a>
    </header> 
  )
}

export default Header;