import React from "react";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./SavedMovies.css";

function SavedMovies(props) {
  
  return (
    
    <main className="savedmovies__wrapper">
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
        arrayForSearching={props.arrayForSearching}
        errorMessage={props.errorMessage}
        setErrorMessage={props.setErrorMessage}
      />
      
      <MoviesCardList
        filmsToRender={props.filmsToRender}
        savedFilms = {props.savedFilms}
        
        onDelFromSaved={props.onDelFromSaved}
      />
      <Footer />    
    </main>
    
  )
}

export default SavedMovies;