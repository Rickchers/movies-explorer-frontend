import MoviesCardList from "../MoviesCardList/MoviesCardList";

import "./SavedMovies.css";

function SavedMovies(props) {
  
  return (
    <main className="savedmovies__wrapper">
      <MoviesCardList
        filmsToRender={props.filmsToRender}
        
        onDelFromSaved={props.onDelFromSaved}
      />
    </main>
  )
}

export default SavedMovies;