import "./MoviesCard.css";

function MoviesCard(props) {
  return (
    <div className="moviescard">
    <div className="moviescard__head-wrapper">
      <div>
        <h4 className="moviescard__head">33 слова о дизайне</h4>
        <p className="moviescard__subtitle">1ч 47м</p>
      </div>
      <div className="moviescard__head-icon"></div>
    </div>
    <img
      src={props.link}
      className="moviescard__image"
      alt=""
    />
  </div>
  )
}

export  default MoviesCard;