import React from "react";

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard"

import MoreButton from "../MoreButton/MoreButton";

function MoviesCardList(props) {
  
  return (
    <section>
            
      <div className="moviescardlist__wrapper">
        <ul className="moviescardlist">
          
          {(props.filmsToRender) && props.filmsToRender.slice(0, props.total).map((movieCard, i) => {
            
            //console.log(movieCard._id);
            return (
              <li key={movieCard.id || movieCard._id} className="moviescardlist__list">
                
                  <MoviesCard               
                    //все карты
                    cards={props.cards}

                    movieCard={movieCard}

                    savedFilms = {props.savedFilms}                
                    
                    //добавление/удаление фильма
                    onAddMovie={props.onAddMovie} 
                    onDelMovie={props.onDelMovie}
                    
                    onDelFromSaved={props.onDelFromSaved}
                    
                  />                
               </li>
                
            )
            
            
          })}
        </ul>        
      </div>
      {(props.filmsToRender) && (props.total < props.filmsToRender.length)
      &&
      <MoreButton
        handleTotal={props.handleTotal}
      />}
    </section>  
    
    
  );  
}

export default MoviesCardList;