import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
    <h1 className="hero__title">Учебный проект студента факультета Веб-разработки.</h1>
    <div className="navigation">
      <button type="button" className="navigation__item">О проекте</button>
      <button type="button" className="navigation__item">Технологии</button>
      <button type="button" className="navigation__item">Студент</button>
    </div>
  </section>
  )
}
export default Hero;