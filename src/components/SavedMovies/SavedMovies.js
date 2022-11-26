import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm"

import "./SavedMovies.css";

function SavedMovies(props) {
  
  return (
    <>
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
      />
      <main className="savedmovies__wrapper">
        <MoviesCardList
          filmsToRender={props.filmsToRender}
          savedFilms = {props.savedFilms}
          
          onDelFromSaved={props.onDelFromSaved}
        />
      </main>    
    </>
  )
}

export default SavedMovies;