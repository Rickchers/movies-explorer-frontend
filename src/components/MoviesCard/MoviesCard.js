

import "./MoviesCard.css";
const URL = "https://api.nomoreparties.co/"


function MoviesCard(props) {
  function handleLikeClick() {
    props.onMovieCardLike(props.movieCard)
  }
  return (
    <section      
      className={`${props.moviecardClosed ? "moviescard_hided" : "moviescard"}`}  
    >
      <div className="moviescard__head-wrapper">
        
        <div>
          <h4 className="moviescard__head">{props.movieCard.nameRU}</h4>
          <p className="moviescard__subtitle">{props.movieCard.duration}</p>
        </div>

        <button
          onClick={
            props.buttonTypeClose ?
            props.onClickCloseIcon :
            handleLikeClick
          }
          type="button"
          className={`${props.buttonTypeClose ?
            "moviescard__close-icon" :
            props.isLiked ?
            "moviescard__head-icon_active" :
            "moviescard__head-icon" }`}        
        ></button>

      </div>

      <a
        href={props.movieCard.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          src={`${URL}${props.movieCard.image.url}`}
          className="moviescard__image"
          alt="карточка фильма"
        /> 
      </a>

    </section>
  )
}

export  default MoviesCard;