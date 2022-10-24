import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./Movies.css";

import { moviesApi } from "../../utils/MoviesApi";

import { useState, useEffect } from "react";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import image1 from "../../images/movies_pics0.png";
import image2 from "../../images/movies_pics1.png";
import image3 from "../../images/movies_pics2.png";
import image4 from "../../images/movies_pics3.png";
import image5 from "../../images/movies_pics4.png";
import image6 from "../../images/movies_pics5.png";
import image7 from "../../images/movies_pics6.png";
import image8 from "../../images/movies_pics7.png";
import image9 from "../../images/movies_pics8.png";
import image10 from "../../images/movies_pics9.png";
import image11 from "../../images/movies_pics10.png";
import image12 from "../../images/movies_pics11.png";

const cards = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8,
  image9,
  image10,
  image11,
  image12,
];

const moviesSearchResult = [];

function Movies(props) {
  // массив объектов фильмов
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    if (true) {
      moviesApi.getMovies().then((result) => {
        setMovies(result);        
      })
      .catch((err) => console.log(err));
    }
  }, [movies]);

  // поиск по ключевым словам из SearchForm
  function handleSearch(input) {
    
    // поисковой запрос в массив из строки
    const userQueryWord = input.split(" ");

    userQueryWord.forEach((word) => {

      movies.forEach((item, i) => {
      
        const movieNameRU = item.nameRU.toLowerCase().trim();
        
        if (movieNameRU.indexOf(word) > -1) {

          console.log(movies[i]);
          moviesSearchResult.push(movies[i]); 

        }
        
      });

    });
    
    //console.log(what);
    
    // for(var n=0; n<what.length; n++){
    //   movies.forEach((item, i) => {
      
    //     const movieNameRU = item.nameRU.toLowerCase().trim();
    //     if(movieNameRU.indexOf(what[n]) > -1){
    //       console.log(movies[i]); 
    //     }
        
    //   });
    // }

  }

  return (
    <main>
      <Header
        isLoggedIn={props.isLoggedIn}
      />
      <div className="movies__wrapper">
        <MoviesCardList
          // cards={cards}
          cards={moviesSearchResult}
          buttonTypeClose={props.buttonTypeClose}
          onSearch={handleSearch}
          onClickShortsButton={props.onClickShortsButton}
          shortsButtonActive={props.shortsButtonActive}
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
