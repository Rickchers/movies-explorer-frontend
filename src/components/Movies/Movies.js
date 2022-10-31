import "./Movies.css";

import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


function Movies(props) {

  return (
    <main>
      <Header
        isLoggedIn={props.isLoggedIn}
      />
      <div className="movies__wrapper">

        
          <MoviesCardList          
            movieCards={props.movieCards}

            //savedMoviesArr={props.savedMoviesArr}

            buttonTypeClose={props.buttonTypeClose}
            
            onClickShortsButton={props.onClickShortsButton}
            shortsButtonActive={props.shortsButtonActive}
            
            //добавление/удаление фильма
            onAddMovie={props.onAddMovie}
            onDelMovie={props.onDelMovie}

            //поиск фильма
            handleFilter={props.handleFilter}
            setSearchInput={props.setSearchInput}

            //все фмльмы BeatFilms
            cards={props.cards}
            //результат поиска по запросу
            filteredBeatFilms={props.filteredBeatFilms}
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
