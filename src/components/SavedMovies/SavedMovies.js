import React, { useEffect } from "react";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import "./SavedMovies.css";

function SavedMovies(props) {

  useEffect(()=>{
    props.setInitialState();
  },[])
 
  return (
    
    <main className="savedmovies__wrapper">
      <Header
        isLoggedIn={props.isLoggedIn}
      />
      <SearchForm
        onClickShortsButton={props.onClickShortsButton}
        shortsButtonActive={props.shortsButtonActive}

        //onSearch={props.onSearch}

        setSearchInput={props.setSearchInput}
        searchInput={props.searchInput}

        //поиск фильма
        handleFilter={props.handleFilter}
        filmsToRender={props.filmsToRender}

        errorMessage={props.errorMessage}
        setErrorMessage={props.setErrorMessage}

        isSearchButtonDisabled={props.isSearchButtonDisabled}
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