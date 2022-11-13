import React from "react";

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard"
import SearchForm from "../SearchForm/SearchForm"

import MoreButton from "../MoreButton/MoreButton";

function MoviesCardList(props) {
  
  return (
    <section>
      <SearchForm
        onClickShortsButton={props.onClickShortsButton}
        shortsButtonActive={props.shortsButtonActive}

        onSearch={props.onSearch}
        setSearchInput={props.setSearchInput}

        //поиск фильма
        handleFilter={props.handleFilter}

        //
        cards={props.cards}

        inputValue={props.inputValue}

      />
      {/* {(!props.filmsToRender.length === 0) && <p >Ничего не найдено</p>} */}
      <div className="moviescardlist__wrapper">
        <ul className="moviescardlist">

          {props.filmsToRender.slice(0, props.total).map((movieCard, i) => {
            
            return (
              <li key={i} className="moviescardlist__list">
                
                  <MoviesCard               
                    //все карты
                    cards={props.cards}

                    movieCard={movieCard}

                    savedFilms = {props.savedFilms}
                    // moviecardClosed={props.moviecardClosed}                    
                    
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
      {props.total < props.filmsToRender.length
      &&
      <MoreButton
        handleTotal={props.handleTotal}
      />}
    </section>  
    
    
  );  
}

export default MoviesCardList;