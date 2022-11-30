
import React from "react";

import "./Movies.css";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm"

import Preloader from "../Preloader/Preloader";


function Movies(props) {
  
  return (
    <main>
      {props.loading && <Preloader />}
      <Header
        isLoggedIn={props.isLoggedIn}
      />

      <SearchForm
        onClickShortsButton={props.onClickShortsButton}
        shortsButtonActive={props.shortsButtonActive}

        onSearch={props.onSearch}
        setSearchInput={props.setSearchInput}
        searchInput={props.searchInput}

        //поиск фильма
        handleFilter={props.handleFilter}
        filmsToRender={props.filmsToRender}

        //
        //arrayForSearching={props.arrayForSearching}

        errorMessage={props.errorMessage}
        setErrorMessage={props.setErrorMessage}
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
            searchInput={props.searchInput}

            //все фильмы BeatFilms
            cards={props.cards}
            savedFilms = {props.savedFilms}

            handleTotal={props.handleTotal}   
            
            drop={props.drop}
            
          />
      </div>
      <Footer />

    </main>
  );
}

export default Movies;
