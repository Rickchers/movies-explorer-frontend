import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <h1 className="hero__title">Учебный проект студента факультета Веб-разработки.</h1>
      <nav className="hero__navigation">
        <button type="button" className="hero__navigation-item">О проекте</button>
        <button type="button" className="hero__navigation-item">Технологии</button>
        <button type="button" className="hero__navigation-item">Студент</button>
      </nav>
    </section>
  )
}
export default Hero;