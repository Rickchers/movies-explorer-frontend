import MoviesCardList from "../MoviesCardList/MoviesCardList";

import "./SavedMovies.css";

function SavedMovies(props) {
  
  return (
    <main className="savedmovies__wrapper">
      <MoviesCardList
        filmsToRender={props.filmsToRender}
        savedFilms = {props.savedFilms}
        
        onDelFromSaved={props.onDelFromSaved}
      />
    </main>
  )
}

export default SavedMovies;