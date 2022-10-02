import React from "react";
import logo from "../../images/header__logo.svg";
import "./Main.css";

import Hero from "../Hero/Hero";
import About from "../About/About";
import Tech from "../Tech/Tech";
import Student from "../Student/Student";
import Portfolio from "../Portfolio/Portfolio";

function Main() {
  return (
    <main className="main">
      <header className="header">
        <img
          className="header__logo"
          src={logo}
          alt="logo"
        />
        <p>Регистрация
          <button
            type="button"
            className="header__button">Войти
          </button>
        </p>
      </header> 
      <Hero />
      <About />
      <Tech />
      <Student />
      <Portfolio />

    </main>
  )
}
export default Main;