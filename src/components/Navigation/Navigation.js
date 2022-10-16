import "./Navigation.css";
import accaunt from "../../images/accaunt.svg";
import pie from "../../images/pie.svg";
import cross from "../../images/cross.svg";



function Navigation(props) {
  //alert (props.isOpened );
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
        <a href="/" className={`${props.isOpened ? "nav__menu" : "nav__menu_hided"}`}>Главная</a>
        <a href="/movies" className="nav__menu">Фильмы</a>
        <a href="/saved-movies" className="nav__menu">Сохранённые фильмы</a>

        <div className="nav__accaunt-title">
          <a href="/profile" className="nav__menu">Аккаунт</a>
          <img
          className="nav__image"
          src={accaunt}
          alt=""
        />
        </div>
      </nav>
      <button type="button" className="nav__pie">
        <img
          onClick={props.onClickPie}      
          //className="nav__pie"
          src={pie}
          alt="кнопка скрыть/показать навигационную панель"
        />
      </button>
    </div>
  )
}

export default Navigation;