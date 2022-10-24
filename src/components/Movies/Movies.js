import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";
import { moviesApi } from "../../utils/MoviesApi";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function Movies(props) {
  
  // const [isLiked, setLiked] = useState(false);
  
  // function handleLiked() {
    //   setLiked(!isLiked);
    // }
    
    // массив объектов фильмов
    const [movies, setMovies] = useState([]);
    const [findedMovies, setfindedMovies] = useState([]);
    
  useEffect(() => {
    if (true) {
      moviesApi.getMovies().then((result) => {
        setMovies(result);        
      })
      .catch((err) => console.log(err));
    }
  }, []);

  // поиск по ключевым словам из SearchForm
  function handleSearch(input) {
    const moviesSearchResult = [];
    movies.forEach((item, i) => {
    
      const movieNameRU = item.nameRU.toLowerCase().trim();
      const inputLowerCase = input.toLowerCase().trim();
      
      if (movieNameRU.indexOf(inputLowerCase) > -1) {
        //console.log(movies[i]);
        moviesSearchResult.push(movies[i]);
      } 
    });
    return setfindedMovies(moviesSearchResult);
  }

  return (
    <main>
      <Header
        isLoggedIn={props.isLoggedIn}
      />
      <div className="movies__wrapper">
        <MoviesCardList
          
          movieCards={findedMovies}
          buttonTypeClose={props.buttonTypeClose}
          onSearch={handleSearch}
          onClickShortsButton={props.onClickShortsButton}
          shortsButtonActive={props.shortsButtonActive}
          // isLiked={isLiked}
          // onClickLiked={handleLiked}
          onMovieCardLike={props.onMovieCardLike}

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
