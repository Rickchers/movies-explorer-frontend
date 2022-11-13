
import React from "react";

import "./Movies.css";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Preloader from "../Preloader/Preloader";


function Movies(props) {
  // function handleMore() {
  //   //console.log(props.total);
  //   props.handleTotal();
  // }

  return (
    <main>
      {props.loading && <Preloader />}
      <Header
        isLoggedIn={props.isLoggedIn}
      />
      <div className="movies__wrapper">

        
          <MoviesCardList          
            filmsToRender={props.filmsToRender}
            
            movieCards={props.movieCards}

            
            total={props.total}
            
            
            onClickShortsButton={props.onClickShortsButton}
            shortsButtonActive={props.shortsButtonActive}
            
            //добавление/удаление фильма
            onAddMovie={props.onAddMovie}
            onDelMovie={props.onDelMovie}

            onDelFromSaved={props.onDelFromSaved}

            //поиск фильма
            handleFilter={props.handleFilter}
            setSearchInput={props.setSearchInput}

            //все фильмы BeatFilms
            cards={props.cards}
            savedFilms = {props.savedFilms}

            handleTotal={props.handleTotal}

            inputValue={props.inputValue}
            
          />
        

        {/* <div className="movies__button-wrapper">
          <button
            type="button"
            onClick={handleMore}
            className="movies__button-more"
          >
            Ещё
          </button>
        </div> */}
      </div>
      <Footer />

    </main>
  );
}

export default Movies;
