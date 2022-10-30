import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import { moviesApi } from "../../utils/MoviesApi";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function Movies(props) {
  //console.log(props.savedMoviesArr);
   
  const [findedMovies, setfindedMovies] = useState([]);
    

  // поиск по ключевым словам из SearchForm
  function handleSearch(input) {
    const inputLowerCase = input.toLowerCase().trim();
    moviesApi.getMovies()
    .then(res => {
      //console.log(res);
      const findedMovies = res.filter((movie) => {
        const movieNameRU = movie.nameRU.toLowerCase().trim();
        return movieNameRU.indexOf(inputLowerCase) > -1;
      });
      return findedMovies;
    })
    .then(res => {
      console.log(res);
      setfindedMovies(res);
    })
    .catch((err) => console.log(err));
  }

  return (
    <main>
      <Header
        isLoggedIn={props.isLoggedIn}
      />
      <div className="movies__wrapper">
        <MoviesCardList          
          movieCards={findedMovies}

          savedMoviesArr={props.savedMoviesArr}

          buttonTypeClose={props.buttonTypeClose}
          onSearch={handleSearch}
          onClickShortsButton={props.onClickShortsButton}
          shortsButtonActive={props.shortsButtonActive}
          
          //добавление/удаление фильма
          onAddMovie={props.onAddMovie}
          onDelMovie={props.onDelMovie}
        />
        <div className="movies__button-wrapper">
          <button type="button" className="movies__button-more">Ещё</button>
        </div>
      </div>
      <Footer />

    </main>
  );
}

export default Movies;
