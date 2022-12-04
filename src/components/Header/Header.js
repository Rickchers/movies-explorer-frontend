import { React, useState } from "react";
import { Link } from "react-router-dom";

import "./Header.css";
import logo from "../../images/header__logo.svg";

import Navigation from "../../components/Navigation/Navigation";


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
      
      <Link to="/">
        <img
          className="header__logo"
          src={logo}
          alt="logo"
        />
      </Link>

      {isLoggedIn && <Navigation 
        isOpened={isSidebarOpened}
        onClickPie={handleOpenSideBar} 
        onClickCross={handleCloseSideBar}     
      />}
      
      
      <Link to="/signup"
        className={`${isLoggedIn ? "header__item-one_hidden" : "header__item-one"}`}>
        Регистрация
      </Link>
      
      <Link to="/signin"
        className={`${isLoggedIn ? "header__button-signin_hidden" : "header__button-signin"}`}>
        Войти
      </Link>
    </header> 
  )
}

export default Header;