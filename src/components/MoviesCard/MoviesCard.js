import "./MoviesCard.css";

import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";

const URL = "https://api.nomoreparties.co/"


function MoviesCard(props) {
  
  const location = useLocation();

  function handleLikeClick() {
    props.onAddMovie(props.movieCard);
    setIsLiked(!isLiked);
  }

  function handleUnlikeClick() {
    props.onDelMovie(props.movieCard);
    setIsLiked(!isLiked); 
  }

  const [isLiked, setIsLiked] = useState(false);

  // useEffect(() => {
  //   props.filteredBeatFilms.map((item) => {
  //     if (item.movieId === props.movieCard.id) {
  //       setIsLiked(true);
  //     }
  //   });
  // }, [props.filteredBeatFilms]);

  console.log(isLiked);
  return (
    <section      
      className={`${props.moviecardClosed ? "moviescard_hided" : "moviescard"}`}  
    >
      <div className="moviescard__head-wrapper">
        
        <div>
          <h4 className="moviescard__head">{props.movieCard.nameRU}</h4>
          <p className="moviescard__subtitle">{props.movieCard.duration}</p>
        </div>

        {location.pathname === '/movies' && (
          <button
            onClick={
              isLiked ?
              handleUnlikeClick :
              handleLikeClick
            }
            type="button"
            className={`${isLiked ? "moviescard__head-icon_active" : "moviescard__head-icon" }`}
                
          ></button>
        )}
        
        {location.pathname === '/saved-movies' && (
          <button
            onClick={
              props.buttonTypeClose ?
              props.onClickCloseIcon :
              handleLikeClick
            }
            type="button"
            className={`${props.buttonTypeClose ?
              "moviescard__close-icon" :
              props.saved ?
              "moviescard__head-icon_active" :
              "moviescard__head-icon" }`}        
          ></button>
        )}       
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