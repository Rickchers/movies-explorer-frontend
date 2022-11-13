import React, { useState } from "react";
import { useLocation } from 'react-router-dom';

import "./MoviesCard.css";

const URL = "https://api.nomoreparties.co/"


function MoviesCard(props) {
  const [isLiked, setIsLiked] = useState(false);
  const location = useLocation();

  // useEffect(() => {
  //   props.savedFilms.map((c) => {
  //     if (c.movieId === props.movieCard.id) {
  //       setIsLiked(true);
  //     }
  //   });
  // }, []);


  function handleChange() {
    if(isLiked){
      props.onDelMovie(props.movieCard);
    }else if(!isLiked){
      props.onAddMovie(props.movieCard);
    }
    setIsLiked(!isLiked);
  }

  function handleDeleteFromSaved() {
    props.onDelFromSaved(props.movieCard);
  }

  return (
    <section      
      className={"moviescard"}  
    >
      <div className="moviescard__head-wrapper">
        
        <div>
          <h4 className="moviescard__head">{props.movieCard.nameRU}</h4>
          <p className="moviescard__subtitle">{props.movieCard.duration}</p>
        </div>

        {location.pathname === '/movies' && (
          <button
            onClick={
              handleChange
            }
            type="button"
            className={`${isLiked ? "moviescard__head-icon_active" : "moviescard__head-icon" }`}
                
          ></button>
        )}
        
        {location.pathname === '/saved-movies' && (
          <button
            onClick={
              handleDeleteFromSaved
            }
            type="button"
            className={"moviescard__close-icon"}        
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