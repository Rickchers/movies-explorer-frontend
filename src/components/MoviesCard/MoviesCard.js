import "./MoviesCard.css";

function MoviesCard(props) {
  //alert (props.moviecardClosed);
  return (
    <section
      // className="moviescard"
      className={`${props.moviecardClosed ? "moviescard_hided" : "moviescard"}`}  
    >
      <div className="moviescard__head-wrapper">
        <div>
          <h4 className="moviescard__head">33 слова о дизайне</h4>
          <p className="moviescard__subtitle">1ч 47м</p>
        </div>
        <button
          onClick={props.onClickCloseIcon}
          type="button"
          className={`${props.buttonTypeClose ? "moviescard__close-icon" : "moviescard__head-icon"}`}        
        ></button>
      </div>
      <img
        src={props.link}
        className="moviescard__image"
        alt="карточка фильма"
      />
    </section>
  )
}

export  default MoviesCard;