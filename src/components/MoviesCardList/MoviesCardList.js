

import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard"
import SearchForm from "../SearchForm/SearchForm"

function MoviesCardList(props) {
  // console.log(props.savedMoviesArr);  

  function checkSaved(savedMoviesArr, movieCard) {
    //return true;
    return savedMoviesArr.find((item) => item.movieId === movieCard.id);
    //return savedMoviesArr;
  }

  return (
    <section>
      <SearchForm
       onClickShortsButton={props.onClickShortsButton}
       shortsButtonActive={props.shortsButtonActive}
       onSearch={props.onSearch}
      />
      <div className="moviescardlist__wrapper">
        <ul className="moviescardlist">
          {props.movieCards.map((movieCard, i) => {
            
            return (
              <li key={movieCard.id} className="moviescardlist__list">
                
                  <MoviesCard
                    movieCard={movieCard}
                    
                    saved={checkSaved(props.savedMoviesArr, movieCard)}

                    buttonTypeClose={props.buttonTypeClose}
                    onClickCloseIcon={props.onClickCloseIcon}
                    moviecardClosed={props.moviecardClosed}
                    isLiked={props.isLiked}
                    
                    //добавление/удаление фильма
                    onAddMovie={props.onAddMovie} 
                    onDelMovie={props.onDelMovie}                 
                  />                
               </li>
                
            )
            
            
          })}
        </ul>        
      </div>
    </section>  
    
    
  );  
}

export default MoviesCardList;