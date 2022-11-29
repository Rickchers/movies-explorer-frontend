import { React } from "react";
import { Link } from "react-router-dom";

import "./Navigation.css";
import accaunt from "../../images/accaunt.svg";
import pie from "../../images/pie.svg";
import cross from "../../images/cross.svg";



function Navigation(props) {
  
  return (
    <div
      className={`${props.isOpened ? "nav__body_siderbar" : "nav__body"}`}
    >      
      <nav        
        className={`${props.isOpened ? "nav__wrapper_siderbar" : "nav__wrapper"}`}
      >
        <button type="button" className={`${props.isOpened ? "nav__sidebar-close" : "nav__sidebar-close_hided"}`}>
          <img
            onClick={props.onClickCross}          
            src={cross}
            alt="кнопка закрыть навигационную панель"
          />
        </button>
        <Link to="/" className={`${props.isOpened ? "nav__menu" : "nav__menu_hided"}`}>Главная</Link>
        <Link to="/movies" className="nav__menu">Фильмы</Link>
        <Link to="/saved-movies" className="nav__menu">Сохранённые фильмы</Link>

        <div className="nav__accaunt-title">
          <Link to="/profile" className="nav__menu">Аккаунт</Link>
          <img
          className="nav__image"
          src={accaunt}
          alt="иконка аккаунта"
        />
        </div>
      </nav>
      <button type="button" className="nav__pie">
        <img
          onClick={props.onClickPie}      
          src={pie}
          alt="кнопка скрыть/показать навигационную панель"
        />
      </button>
    </div>
  )
}

export default Navigation;